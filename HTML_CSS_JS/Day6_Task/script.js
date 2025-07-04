let allProducts = [];
let currentUser = null; // To store the currently logged-in user
let currentCheckoutItems = []; // Items currently in the checkout flow (could be from cart or buy now)
let selectedPaymentMode = 'cod'; // Default payment mode
let selectedAddressId = null; // To keep track of the currently selected address for checkout
let selectedSize = null; // Store selected size for current product

// --- Helper Functions for User-Specific Data Management ---
function getStorageKey(type, email) {
    return `${type}_${email}`; // e.g., 'cart_user@example.com', 'wishlist_user@example.com', 'addresses_user@example.com'
}

function loadUserData(type, userEmail) {
    const storedData = localStorage.getItem(getStorageKey(type, userEmail));
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

function saveUserData(type, userEmail, data) {
    localStorage.setItem(getStorageKey(type, userEmail), JSON.stringify(data));
}

// --- General UI Toggles ---
function showSection(sectionId) {
    // Hide all main content sections
    document.getElementById("authContainer").style.display = "none";
    document.getElementById("mainContent").style.display = "none";

    document.getElementById("registerContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("productListings").style.display = "none";
    document.getElementById("productDetailContainer").style.display = "none";
    document.getElementById("cartContainer").style.display = "none";
    document.getElementById("wishlistContainer").style.display = "none";
    document.getElementById("checkoutContainer").style.display = "none";
    document.getElementById("orderConfirmationContainer").style.display = "none";

    // Show the requested section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        if (["authContainer"].includes(sectionId)) {
            targetSection.style.display = "flex";
        } else {
            document.getElementById("mainContent").style.display = "block"; // Show main content wrapper if not auth
            // Use 'flex' for containers that are flexboxes
            if (["productListings", "cartContainer", "wishlistContainer", "checkoutContainer", "productDetailContainer"].includes(sectionId)) {
                targetSection.style.display = "flex";
            } else {
                targetSection.style.display = "block";
            }
        }
    }
}

function toggleForms(form) {
    showSection("authContainer"); // Ensure auth container is visible first
    if (form === "register") {
        document.getElementById("registerContainer").style.display = "block";
        document.getElementById("loginContainer").style.display = "none";
    } else {
        document.getElementById("registerContainer").style.display = "none";
        document.getElementById("loginContainer").style.display = "block";
    }
}

function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// --- User Authentication ---
function register() {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const img = document.getElementById("regImg").value;

    if (name && email && password && img) {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (users[email]) {
            alert("User with this email already exists!");
            return;
        }
        users[email] = { name, email, password, img };
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registration successful! Please log in.");
        toggleForms("login");
    } else {
        alert("Please fill all fields");
    }
}

function login() {
    const email = document.getElementById("logEmail").value;
    const password = document.getElementById("logPassword").value;
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const user = users[email];

    if (user && user.password === password) {
        currentUser = user; // Set the current logged-in user
        document.getElementById("nav-bar").style.display = "flex"; // Ensure navbar is visible
        document.getElementById("userImg").src = currentUser.img;
        document.getElementById("userName").textContent = currentUser.name;

        showSection("productListings"); // Show product listings after login
        loadProducts(); // Load products for display

        updateCartCountDisplay(); // Initialize cart count for the logged-in user
        updateWishlistCountDisplay(); // Initialize wishlist count
    } else {
        alert("Invalid credentials!");
    }
}

function logout() {
    currentUser = null; // Clear the current user
    // Hide logged-in specific UI
    document.getElementById("nav-bar").style.display = "none";
    // Show login form
    toggleForms("login");
    document.getElementById("cartCount").textContent = 0; // Reset cart count display
    document.getElementById("wishlistCount").textContent = 0; // Reset wishlist count display
    // Clear login form fields
    document.getElementById("logEmail").value = "";
    document.getElementById("logPassword").value = "";
    alert("Logged out successfully!");
}

// --- Product Listing and Filtering ---
async function loadProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    allProducts = data.products;
    populateCategories(allProducts);
    displayProducts(allProducts);
}

function displayProducts(products) {
    const container = document.getElementById("productListings");
    container.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        // Make the entire card clickable to show details
        card.onclick = () => showProductDetails(product.id);

        const carouselId = 'carousel_' + product.id;
        card.innerHTML = `
            <div class="carousel" id="${carouselId}">
                ${product.images.slice(0, 3).map((img, i) => `<img src="${img}" class="${i === 0 ? 'active' : ''}" alt="${product.title} image ${i+1}" />`).join('')}
                <div class="carousel-buttons">
                    ${product.images.slice(0, 3).map((_, i) => `<span onclick="event.stopPropagation(); changeSlide('${carouselId}', ${i})" class="${i === 0 ? 'active' : ''}"></span>`).join('')}
                </div>
            </div>
            <h3>${product.title}</h3>
            <p>Price: ₹${product.price.toFixed(2)} (Discount: ${product.discountPercentage.toFixed(2)}%)</p>
            <a onclick='event.stopPropagation(); showRatings(${JSON.stringify(product)})'>${product.rating} stars (View Ratings)</a><br/>
            <a onclick='event.stopPropagation(); showReviews(${JSON.stringify(product)})'>Customer Reviews</a><br/>
            <p>Expected delivery: 3-5 days</p>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id});">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

function populateCategories(products) {
    const categories = [...new Set(products.map(p => p.category))];
    const filter = document.getElementById("categoryFilter");
    filter.innerHTML = '<option value="">All Categories</option>'; // Always start with 'All'
    categories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1); // Capitalize first letter
        filter.appendChild(opt);
    });
}

function searchProducts() {
    const term = document.getElementById("searchInput").value.toLowerCase();
    const filtered = allProducts.filter(p => p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));
    displayProducts(filtered);
}

function filterByCategory() {
    const category = document.getElementById("categoryFilter").value;
    const filtered = category ? allProducts.filter(p => p.category === category) : allProducts;
    displayProducts(filtered);
}

// --- Product Detail Page ---
function showProductDetails(productId) {
    if (!currentUser) {
        alert("Please log in to view product details.");
        return;
    }

    const product = allProducts.find(p => p.id === productId);
    if (!product) {
        alert("Product not found!");
        goToProductListings();
        return;
    }

    showSection("productDetailContainer");
    const container = document.getElementById("productDetailContainer");
    container.innerHTML = `
        <div class="product-detail-images">
            <img src="${product.thumbnail}" alt="${product.title}" class="product-detail-main-img" id="productMainImage">
            <div class="product-detail-thumbnails">
                ${product.images.map((img, i) => `<img src="${img}" alt="${product.title} thumbnail ${i+1}" onclick="changeProductMainImage(this)" ${i === 0 ? 'class="active"' : ''}>`).join('')}
            </div>
        </div>
        <div class="product-detail-info">
            <h2>${product.title}</h2>
            <p class="price">₹${product.price.toFixed(2)} <span class="discount">(Discount: ${product.discountPercentage.toFixed(2)}%)</span></p>
            <p class="description">${product.description}</p>

            <div class="meta-info">
                <p><strong>Brand:</strong> ${product.brand}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Rating:</strong> <a onclick='showRatings(${JSON.stringify(product)})'>${product.rating} stars (View Ratings)</a></p>
                <p><strong>Reviews:</strong> <a onclick='showReviews(${JSON.stringify(product)})'>Customer Reviews (${product.reviews ? product.reviews.length : 'N/A'})</a></p>
            </div>

            <div class="size-selection">
                <label>Select Size:</label>
                <div class="size-options">
                    <button onclick="selectSize(this)" data-size="S">S</button>
                    <button onclick="selectSize(this)" data-size="M">M</button>
                    <button onclick="selectSize(this)" data-size="L">L</button>
                    <button onclick="selectSize(this)" data-size="XL">XL</button>
                    <button onclick="selectSize(this)" data-size="XXL">XXL</button>
                </div>
            </div>

            <div class="product-actions">
                <button class="add-to-bag-btn" onclick="addToCart(${product.id})">Add To Bag</button>
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                    <span id="wishlistButtonText">${isProductInWishlist(product.id) ? 'Remove from Wishlist' : 'Wishlist'}</span>
                </button>
                <button class="buy-now-btn" onclick="startCheckout(false, ${product.id})">Buy Now</button>
            </div>
        </div>
    `;
    // Ensure the first thumbnail is active
    if (product.images.length > 0) {
        document.querySelector('.product-detail-thumbnails img')?.classList.add('active');
    }
    selectedSize = null; // Reset selected size when a new product is viewed
}

function changeProductMainImage(thumbnailElement) {
    const mainImage = document.getElementById('productMainImage');
    mainImage.src = thumbnailElement.src;
    // Remove active class from all thumbnails and add to the clicked one
    document.querySelectorAll('.product-detail-thumbnails img').forEach(img => img.classList.remove('active'));
    thumbnailElement.classList.add('active');
}

function selectSize(buttonElement) {
    document.querySelectorAll('.size-options button').forEach(btn => btn.classList.remove('selected'));
    buttonElement.classList.add('selected');
    selectedSize = buttonElement.dataset.size;
    console.log("Selected size:", selectedSize); // For demo purposes
}


// --- Cart Functionality ---
function updateCartCountDisplay() {
    if (currentUser) {
        const userCart = loadUserData('cart', currentUser.email);
        document.getElementById("cartCount").textContent = userCart.length;
    } else {
        document.getElementById("cartCount").textContent = 0;
    }
}

function addToCart(productId) {
    if (!currentUser) {
        alert("Please log in to add items to your bag.");
        return;
    }

    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    let userCart = loadUserData('cart', currentUser.email);
    const existingItem = userCart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        userCart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage, // Store discount for accurate price calculation
            thumbnail: product.thumbnail,
            quantity: 1,
            selectedSize: selectedSize || 'M' // Default to M if no size selected
        });
    }

    saveUserData('cart', currentUser.email, userCart);
    updateCartCountDisplay();
    alert(`${product.title} added to bag!`);
}

function viewCart() {
    if (!currentUser) {
        alert("Please log in to view your bag.");
        return;
    }

    showSection("cartContainer"); // Show cart container
    const cartItemsDiv = document.getElementById("cartItemsWrapper");
    const cartSummaryDiv = document.getElementById("cartSummary");

    cartItemsDiv.innerHTML = ""; // Clear previous content
    cartSummaryDiv.innerHTML = ""; // Clear previous summary content

    let userCart = loadUserData('cart', currentUser.email);

    if (userCart.length === 0) {
        cartItemsDiv.innerHTML = `<p>Your bag is empty.</p>`;
        cartSummaryDiv.innerHTML = `
            <button onclick="goToProductListings()">Continue Shopping</button>
        `;
        return;
    }

    let totalMRP = 0;
    let totalDiscount = 0;

    userCart.forEach(item => {
        const productDetails = allProducts.find(p => p.id === item.id);

        // Calculate original price based on stored price and discountPercentage
        // This is a common way to infer MRP if only discounted price and discount% are given
        const originalSinglePrice = productDetails && productDetails.discountPercentage !== undefined
            ? item.price / (1 - productDetails.discountPercentage / 100)
            : item.price; // If no discount info, assume item.price is effective MRP

        const itemOriginalTotal = originalSinglePrice * item.quantity;
        const itemDiscount = (originalSinglePrice - item.price) * item.quantity; // Discount amount for this item

        const itemTotal = item.price * item.quantity; // Final price after discount

        totalMRP += itemOriginalTotal;
        totalDiscount += itemDiscount;


        const cartItemCard = document.createElement("div");
        cartItemCard.className = "cart-item-card";
        cartItemCard.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}" />
            <div>
                <h3>${item.title}</h3>
                <p>Size: ${item.selectedSize}</p>
                <p>Price: ₹${item.price.toFixed(2)} <span class="discount-label">(MRP: ₹${originalSinglePrice.toFixed(2)})</span></p>
                <div class="quantity-control">
                    <button onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                </div>
                <p>Subtotal: ₹${itemTotal.toFixed(2)}</p>
                <button onclick="removeCartItem(${item.id})" class="remove-btn">Remove</button>
            </div>
        `;
        cartItemsDiv.appendChild(cartItemCard);
    });

    cartSummaryDiv.innerHTML = `
        <h3>Price Details (<span id="cartSummaryItemCount">${userCart.length}</span> Items)</h3>
        <p>Total MRP <span class="price-value">₹${totalMRP.toFixed(2)}</span></p>
        <p>Discount on MRP <span class="price-value discount-value">- ₹${totalDiscount.toFixed(2)}</span></p>
        <p>Convenience Fee <span class="price-value free-value">₹ FREE</span></p>
        <hr>
        <h4>Total Amount <span class="price-value total-amount-value">₹${(totalMRP - totalDiscount).toFixed(2)}</span></h4>
        <button onclick="startCheckout(true)" class="checkout-btn">Proceed to Checkout</button>
        <button onclick="goToProductListings()">Continue Shopping</button>
    `;
}

function updateCartItemQuantity(productId, change) {
    if (!currentUser) return;

    let userCart = loadUserData('cart', currentUser.email);
    const itemIndex = userCart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        userCart[itemIndex].quantity += change;
        if (userCart[itemIndex].quantity <= 0) {
            userCart.splice(itemIndex, 1); // Remove item if quantity is 0 or less
        }
        saveUserData('cart', currentUser.email, userCart);
        updateCartCountDisplay();
        viewCart(); // Re-render cart to show updated quantities and total
    }
}

function removeCartItem(productId) {
    if (!currentUser) return;

    let userCart = loadUserData('cart', currentUser.email);
    userCart = userCart.filter(item => item.id !== productId); // Filter out the item
    saveUserData('cart', currentUser.email, userCart);
    updateCartCountDisplay();
    viewCart(); // Re-render cart
}

// --- Wishlist Functionality ---
function updateWishlistCountDisplay() {
    if (currentUser) {
        const userWishlist = loadUserData('wishlist', currentUser.email);
        document.getElementById("wishlistCount").textContent = userWishlist.length;
    } else {
        document.getElementById("wishlistCount").textContent = 0;
    }
}

function isProductInWishlist(productId) {
    if (!currentUser) return false;
    const userWishlist = loadUserData('wishlist', currentUser.email);
    return userWishlist.some(item => item.id === productId);
}

function toggleWishlist(productId) {
    if (!currentUser) {
        alert("Please log in to manage your wishlist.");
        return;
    }

    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    let userWishlist = loadUserData('wishlist', currentUser.email);
    const existingItemIndex = userWishlist.findIndex(item => item.id === productId);

    // This specifically targets the button text on the product detail page
    const wishlistButtonTextElement = document.getElementById("wishlistButtonText");

    if (existingItemIndex > -1) {
        userWishlist.splice(existingItemIndex, 1);
        alert(`${product.title} removed from wishlist!`);
        if (wishlistButtonTextElement) wishlistButtonTextElement.textContent = 'Wishlist';
    } else {
        userWishlist.push({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail
        });
        alert(`${product.title} added to wishlist!`);
        if (wishlistButtonTextElement) wishlistButtonTextElement.textContent = 'Remove from Wishlist';
    }

    saveUserData('wishlist', currentUser.email, userWishlist);
    updateWishlistCountDisplay();
    // If currently on wishlist page, re-render it to reflect changes
    if (document.getElementById('wishlistContainer').style.display === 'flex') {
        viewWishlist();
    }
}

function viewWishlist() {
    if (!currentUser) {
        alert("Please log in to view your wishlist.");
        return;
    }

    showSection("wishlistContainer");
    const container = document.getElementById("wishlistItemsWrapper");
    container.innerHTML = ""; // Clear previous content

    let userWishlist = loadUserData('wishlist', currentUser.email);

    if (userWishlist.length === 0) {
        container.innerHTML = `
            <p>Your wishlist is empty.</p>
        `;
        return;
    }

    userWishlist.forEach(item => {
        const card = document.createElement("div");
        card.className = "cart-item-card"; // Reusing cart-item-card style for consistency
        card.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}" />
            <div>
                <h3>${item.title}</h3>
                <p>Price: ₹${item.price.toFixed(2)}</p>
                <button onclick="addToCartFromWishlist(${item.id})" style="background-color: var(--secondary-color);">Add to Bag</button>
                <button onclick="toggleWishlist(${item.id})" class="remove-btn">Remove</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function addToCartFromWishlist(productId) {
    addToCart(productId);
    toggleWishlist(productId); // Remove from wishlist after adding to cart
}


// --- Address Management for Checkout ---
function loadUserAddresses() {
    if (!currentUser) return [];
    return loadUserData('addresses', currentUser.email);
}

function saveUserAddresses(addresses) {
    if (!currentUser) return;
    saveUserData('addresses', currentUser.email, addresses);
}

function renderAddresses() {
    const addresses = loadUserAddresses();
    const container = document.getElementById('userAddressesContainer');
    container.innerHTML = '';
    selectedAddressId = null; // Reset selected address when re-rendering

    if (addresses.length === 0) {
        container.innerHTML = '<p>No addresses found. Please add a new address.</p>';
        // If no addresses, ensure the form is visible to prompt adding one
        toggleAddAddressForm(true);
        return;
    } else {
        toggleAddAddressForm(false); // Hide the form if addresses exist
    }


    addresses.forEach(address => {
        const addressCard = document.createElement('div');
        addressCard.className = 'address-card';
        addressCard.dataset.addressId = address.id;
        addressCard.innerHTML = `
            <h4>${address.name} <span class="address-tag">HOME</span></h4>
            <p>${address.addressLine1}, ${address.addressLine2 ? address.addressLine2 + ',' : ''}</p>
            <p>${address.addressCity}, ${address.addressState} - ${address.addressPincode}</p>
            <p>Mobile: ${address.addressMobile}</p>
            <p>• Pay on Delivery available</p>
            <button class="remove-address-btn" onclick="removeAddress('${address.id}', event)">REMOVE</button>
        `;
        addressCard.onclick = (event) => selectAddress(address.id, event); // Make card clickable to select
        container.appendChild(addressCard);
    });

    // Automatically select the first address if available and none selected
    if (addresses.length > 0 && !selectedAddressId) {
        selectAddress(addresses[0].id);
    }
}

function selectAddress(addressId, event = null) {
    if (event) event.stopPropagation(); // Prevent card click from interfering with button click

    // Remove 'selected' class from all address cards
    document.querySelectorAll('.address-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Add 'selected' class to the clicked/selected address card
    const selectedCard = document.querySelector(`.address-card[data-address-id="${addressId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
        selectedAddressId = addressId; // Store the ID of the selected address
        console.log("Selected address ID:", selectedAddressId);
    }
}


function toggleAddAddressForm(show = true) {
    const form = document.getElementById('newAddressForm');
    const addButton = document.querySelector('.add-new-address-btn');
    if (show) {
        form.style.display = 'block';
        addButton.style.display = 'none'; // Hide add button when form is shown
        // Clear form fields
        document.getElementById('addressName').value = '';
        document.getElementById('addressLine1').value = '';
        document.getElementById('addressLine2').value = '';
        document.getElementById('addressCity').value = '';
        document.getElementById('addressState').value = '';
        document.getElementById('addressPincode').value = '';
        document.getElementById('addressMobile').value = '';
    } else {
        form.style.display = 'none';
        addButton.style.display = 'block'; // Show add button when form is hidden
    }
}

function saveNewAddress() {
    const name = document.getElementById('addressName').value.trim();
    const addressLine1 = document.getElementById('addressLine1').value.trim();
    const addressLine2 = document.getElementById('addressLine2').value.trim();
    const addressCity = document.getElementById('addressCity').value.trim();
    const addressState = document.getElementById('addressState').value.trim();
    const addressPincode = document.getElementById('addressPincode').value.trim();
    const addressMobile = document.getElementById('addressMobile').value.trim();

    if (!name || !addressLine1 || !addressCity || !addressState || !addressPincode || !addressMobile) {
        alert("Please fill in all mandatory address fields.");
        return;
    }

    const newAddress = {
        id: 'addr_' + Date.now(), // Simple unique ID
        name,
        addressLine1,
        addressLine2,
        addressCity,
        addressState,
        addressPincode,
        addressMobile
    };

    const addresses = loadUserAddresses();
    addresses.push(newAddress);
    saveUserAddresses(addresses);

    alert("Address saved successfully!");
    toggleAddAddressForm(false); // Hide the form
    renderAddresses(); // Re-render addresses to show the new one
}

function removeAddress(addressId, event) {
    event.stopPropagation(); // Prevent selecting the card when clicking remove

    if (!confirm("Are you sure you want to remove this address?")) {
        return;
    }

    let addresses = loadUserAddresses();
    addresses = addresses.filter(addr => addr.id !== addressId);
    saveUserAddresses(addresses);

    alert("Address removed.");
    renderAddresses(); // Re-render addresses
}


// --- Checkout Flow (modified to include address management) ---
function startCheckout(fromCart, productId = null) {
    if (!currentUser) {
        alert("Please log in to proceed to checkout.");
        return;
    }

    if (fromCart) {
        currentCheckoutItems = loadUserData('cart', currentUser.email);
        if (currentCheckoutItems.length === 0) {
            alert("Your bag is empty. Please add items before checking out.");
            goToProductListings();
            return;
        }
    } else { // Buy Now functionality
        const product = allProducts.find(p => p.id === productId);
        if (!product) {
            alert("Product not found for direct purchase.");
            goToProductListings();
            return;
        }
        currentCheckoutItems = [{ // Create a temporary item for checkout
            id: product.id,
            title: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage,
            thumbnail: product.thumbnail,
            quantity: 1,
            selectedSize: selectedSize || 'M' // Use selected size from detail page
        }];
    }

    showSection('checkoutContainer');
    renderAddresses(); // Load and display user addresses
    updateCheckoutPriceDetails();
    setupPaymentModeTabs(); // Initialize payment tabs
}

function updateCheckoutPriceDetails() {
    let totalMRP = 0;
    let totalDiscount = 0;
    const convenienceFee = 0; // As per screenshot, it's free

    currentCheckoutItems.forEach(item => {
        const productDetails = allProducts.find(p => p.id === item.id);
        // Reconstruct original price: price / (1 - discountPercentage/100)
        // Ensure discountPercentage is used from productDetails if available, otherwise from item (if added via cart)
        const originalSinglePrice = productDetails && productDetails.discountPercentage !== undefined
            ? item.price / (1 - productDetails.discountPercentage / 100)
            : (item.discountPercentage !== undefined ? item.price / (1 - item.discountPercentage / 100) : item.price);


        totalMRP += (originalSinglePrice * item.quantity);
        totalDiscount += (originalSinglePrice - item.price) * item.quantity;
    });

    const totalAmount = totalMRP - totalDiscount + convenienceFee;

    document.getElementById("checkoutItemCount").textContent = currentCheckoutItems.length;
    document.getElementById("checkoutTotalMRP").textContent = `₹${totalMRP.toFixed(2)}`;
    document.getElementById("checkoutDiscountMRP").textContent = `- ₹${totalDiscount.toFixed(2)}`;
    document.getElementById("checkoutConvenienceFee").textContent = `₹ FREE`; // Always free
    document.getElementById("checkoutTotalAmount").textContent = `₹${totalAmount.toFixed(2)}`;
}

function setupPaymentModeTabs() {
    const paymentTabBtns = document.querySelectorAll('.payment-tab-btn');
    const paymentDetailsContents = document.querySelectorAll('.payment-details-content');

    paymentTabBtns.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and content
            paymentTabBtns.forEach(btn => btn.classList.remove('active'));
            paymentDetailsContents.forEach(content => content.style.display = 'none');

            // Add active class to clicked button
            button.classList.add('active');
            selectedPaymentMode = button.dataset.paymentMode; // Set the selected payment mode

            // Show corresponding content
            document.getElementById(`paymentDetails${selectedPaymentMode.charAt(0).toUpperCase() + selectedPaymentMode.slice(1)}`).style.display = 'block';

            // Regenerate COD Captcha if selected
            if (selectedPaymentMode === 'cod') {
                generateCodCaptcha();
            }
        });
    });

    // Initialize with COD active on first load
    document.querySelector('.payment-tab-btn[data-payment-mode="cod"]')?.click();
}

function generateCodCaptcha() {
    const captchaCode = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit number
    document.getElementById('codCaptchaCode').textContent = captchaCode;
    document.getElementById('codCaptchaInput').value = ''; // Clear input
}


function placeOrder() {
    if (!currentUser) {
        alert("Please log in to place an order.");
        return;
    }

    if (currentCheckoutItems.length === 0) {
        alert("No items to place an order for.");
        goToProductListings();
        return;
    }

    if (!selectedAddressId) {
        alert("Please select or add a delivery address.");
        return;
    }

    // Payment method specific validation
    if (selectedPaymentMode === 'cod') {
        const captchaCode = document.getElementById('codCaptchaCode').textContent;
        const captchaInput = document.getElementById('codCaptchaInput').value;
        if (captchaInput !== captchaCode) {
            alert("Incorrect CAPTCHA code. Please try again.");
            generateCodCaptcha(); // Regenerate CAPTCHA on failure
            return;
        }
    }
    // For other payment methods, no specific input is required for this simulation.
    // The alert message below handles the "virtual functionality".

    alert("Order placement simulated! (This is a demo. No actual payment/order processed.)");

    // Clear the user's cart after "checkout" if the order came from the cart
    const userCart = loadUserData('cart', currentUser.email);
    const cartItemIds = userCart.map(item => item.id);
    const itemsRemovedFromCart = currentCheckoutItems.filter(item => cartItemIds.includes(item.id));

    if (itemsRemovedFromCart.length > 0 && currentCheckoutItems.length === itemsRemovedFromCart.length) {
        // If all checkout items were from cart, clear the entire cart
        saveUserData('cart', currentUser.email, []);
    } else if (itemsRemovedFromCart.length > 0) {
        // If some items were from cart, filter them out
        let updatedCart = userCart.filter(cartItem => !currentCheckoutItems.some(checkoutItem => checkoutItem.id === cartItem.id));
        saveUserData('cart', currentUser.email, updatedCart);
    }
    // If currentCheckoutItems came from 'Buy Now' directly, no cart clearing is needed.


    updateCartCountDisplay();
    currentCheckoutItems = []; // Clear current checkout session
    selectedAddressId = null; // Clear selected address

    showSection('orderConfirmationContainer'); // Show order confirmation
}

// --- Navigation Functions ---
function goToProductListings() {
    showSection("productListings");
    document.getElementById("searchInput").value = ""; // Clear search input
    document.getElementById("categoryFilter").value = ""; // Reset category filter
    displayProducts(allProducts); // Display all products again
}


// --- Carousel and Modals (Existing functionality, minor tweaks) ---
function changeSlide(carouselId, index) {
    const carouselImgs = document.querySelectorAll(`#${carouselId} img`);
    const dots = document.querySelectorAll(`#${carouselId} .carousel-buttons span`);
    if (carouselImgs.length === 0 || dots.length === 0) return; // Prevent errors if elements aren't found

    carouselImgs.forEach((img, i) => img.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

function showModal(title, content) {
    // Ensure only one modal is active
    closeModal(); // Close any existing modal first

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.onclick = closeModal; // Close modal when clicking outside

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <h3>${title}</h3>
        <div id="modalContent">${content}</div>
        <br><button onclick="closeModal()">Close</button>
    `;
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    overlay.style.display = 'flex'; // Make sure overlay is visible
    modal.style.display = 'block'; // Make sure modal is visible
}

function closeModal() {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".modal-overlay");
    if (modal) modal.remove();
    if (overlay) overlay.remove();
}

function showRatings(product) {
    const content = `
        <p><strong>Rating:</strong> ${product.rating} / 5</p>
        <p>Based on estimated ${Math.floor(product.rating * 20)} user reviews.</p>
    `;
    showModal(product.title + " - Ratings", content);
}

function showReviews(product) {
    // Dummy reviews as dummyjson product reviews are not detailed
    const dummyReviews = [
        "Great product, highly recommend!",
        "Good quality for the price.",
        "Exactly what I was looking for.",
        "Fast delivery and well-packaged."
    ];
    let reviewContent = `
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <h4>Customer Reviews:</h4>
        <ul>
    `;
    // Add some random dummy reviews
    for(let i = 0; i < Math.min(dummyReviews.length, Math.ceil(Math.random() * dummyReviews.length)); i++) {
        reviewContent += `<li>"${dummyReviews[Math.floor(Math.random() * dummyReviews.length)]}"</li>`;
    }
    reviewContent += `</ul>`;

    showModal(product.title + " - Reviews", reviewContent);
}

// --- Initial Load ---
document.addEventListener("DOMContentLoaded", () => {
    // Start with the login form displayed
    toggleForms('login');

    // Note: productListBtn click is handled by direct function call now, not event listener needed.
});

// Immediately load products for potential quick display if user logs in
loadProducts();