import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

// Define inline SVG components for social icons and close button
const FacebookIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.502 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z"
      clipRule="evenodd"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22.25 6.049c-.77.343-1.6.574-2.476.678.885-.532 1.563-1.373 1.889-2.378-.83.49-1.756.845-2.73.923C18.257 3.864 17.067 3 15.6 3c-2.457 0-4.444 1.987-4.444 4.444 0 .348.04.686.118 1.011C7.75 8.167 4.098 6.136 1.684 3.125c-.42.723-.66 1.564-.66 2.463 0 1.536.78 2.89 1.968 3.682-.72-.023-1.4-.22-2.007-.556v.056c0 2.155 1.53 3.947 3.55 4.364-.37.1-.75.15-1.144.15-.28 0-.55-.027-.816-.078.568 1.777 2.227 3.075 4.195 3.109-1.523 1.192-3.447 1.905-5.545 1.905-.36 0-.71-.02-.996-.06C1.944 20.088 4.208 21 6.643 21c7.962 0 12.316-6.586 12.316-12.316 0-.188-.004-.376-.013-.563.85-.615 1.588-1.377 2.174-2.247z" />
  </svg>
);

const PinterestIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12.004 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c5.807 0 10.662-4.14 11.666-9.525-.008-.002-.016-.004-.024-.006L23.99 12c0-6.627-5.373-12-11.996-12zm-3.004 16.5c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm3.004-3c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm3.004-3c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm3.004-3c-.754 0-1.365-.611-1.365-1.365 0-.754.611-1.365 1.365-1.365s1.365.611 1.365 1.365c0 .754-.611 1.365-1.365 1.365zm-12.016 9.5c0 1.254.912 2.274 2.036 2.274s2.036-1.02 2.036-2.274c0-1.254-.912-2.274-2.036-2.274s-2.036 1.02-2.036 2.274zm-3.004 0c0 1.254.912 2.274 2.036 2.274s2.036-1.02 2.036-2.274c0-1.254-.912-2.274-2.036-2.274s-2.036 1.02-2.036 2.274zm-3.004 0c0 1.254.912 2.274 2.036 2.274s2.036-1.02 2.036-2.274c0-1.254-.912-2.274-2.036-2.274s-2.036 1.02-2.036 2.274z" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

const Header = ({ setSearchQuery, searchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputRef = useRef(null); // Ref to focus the input field
  const searchContainerRef = useRef(null); // Ref for the search dropdown container
  const location = useLocation(); // Get the current location object

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // If menu is toggled, hide search if it's open
    if (isSearchVisible) {
      setIsSearchVisible(false);
      setSearchQuery("");
    }
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    // Clear search query when hiding the search bar
    if (isSearchVisible) {
      setSearchQuery("");
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Searching for:", searchQuery);
    // Optionally close the search bar after search, or keep it open for more searches
    // setIsSearchVisible(false);
  };

  // Function to determine if a link is active and apply the text-sky-500 color
  const getLinkClass = (path, defaultColor = "text-black") => {
    // For the home link, ensure exact match to avoid it being active on all sub-routes
    if (path === "/") {
      return location.pathname === path ? "text-sky-500" : defaultColor;
    }
    // For other links, check if the current path exactly matches the link's path
    return location.pathname === path ? "text-sky-500" : defaultColor;
  };

  // Effect to focus the input field when search becomes visible
  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }

    // Handle clicks outside the search container to close it
    const handleClickOutside = (event) => {
      // Get references to the toggle buttons
      const desktopToggleButton = document.getElementById(
        "search-toggle-button"
      );
      const mobileToggleButton = document.getElementById(
        "mobile-search-toggle-button"
      );

      // Check if the click occurred on either toggle button
      const clickedOnToggleButton =
        (desktopToggleButton && desktopToggleButton.contains(event.target)) ||
        (mobileToggleButton && mobileToggleButton.contains(event.target));

      // Check if the click occurred inside the search container
      const clickedInsideSearchContainer =
        searchContainerRef.current &&
        searchContainerRef.current.contains(event.target);

      // If the click was on a toggle button or inside the search container, do nothing (don't close).
      // Otherwise, close the search.
      if (!clickedOnToggleButton && !clickedInsideSearchContainer) {
        setIsSearchVisible(false);
        setSearchQuery(""); // Clear search when clicking outside
      }
    };

    if (isSearchVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchVisible, setSearchQuery]);

  return (
    <nav className="bg-white px-30 shadow-md relative z-50">
      {/* Changed px-45 to px-6 for proper Tailwind padding */}
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        {" "}
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            {/* Adjusted logo height from h-40 to h-12 */}
            <img
              src="/htmlcodex.png"
              alt="HTML Codex Logo"
              className="h-40 mr-2"
            />
          </Link>
        </div>
        {/* Desktop Menu Links + Search Icon + Hamburger Icon */}
        <div className="hidden md:flex items-center flex-grow justify-end">
          {/* Desktop Navigation Links (always visible) */}
          <Link
            to="/free-templates"
            className={`font-semibold hover:text-sky-500 px-4 ${getLinkClass(
              "/free-templates"
            )}`}
          >
            Free Templates
          </Link>
          <Link
            to="/premium-templates"
            className={`font-semibold hover:text-sky-500 px-4 ${getLinkClass(
              "/premium-templates"
            )}`}
          >
            Premium Templates
          </Link>
          <Link
            to="/template-license"
            className={`font-semibold hover:text-sky-500 px-4 ${getLinkClass(
              "/template-license"
            )}`}
          >
            Template License
          </Link>
          <Link
            to="/remove-credit"
            className={`font-semibold hover:text-sky-500 px-4 ${getLinkClass(
              "/remove-credit"
            )}`}
          >
            Remove Credit
          </Link>
          <Link
            to="/contact-us"
            className={`font-semibold hover:text-sky-500 px-4 ${getLinkClass(
              "/contact-us"
            )}`}
          >
            Contact Us
          </Link>

          {/* Desktop Search Icon / Close Icon Toggle */}
          <div className="relative">
            {" "}
            {/* Added relative positioning for the dropdown */}
            <button
              onClick={toggleSearch}
              className="text-black font-bold hover:text-sky-500 ml-8"
              id="search-toggle-button" // Added ID for click outside logic
            >
              {isSearchVisible ? (
                // X icon when search is visible
                <CloseIcon className="w-6 h-6" />
              ) : (
                // Search icon when search is not visible
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              )}
            </button>
            {/* Search Input Dropdown */}
            {isSearchVisible && (
              <div
                ref={searchContainerRef} // Attach ref here
                className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-40"
              >
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex flex-col gap-3"
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Type here to search..."
                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-base"
                  >
                    SEARCH
                  </button>
                  {/* Removed the separate close button from here */}
                </form>
              </div>
            )}
          </div>

          {/* Desktop Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-black font-bold hover:text-sky-500 ml-4"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Icons (Search and Hamburger) */}
        <div className="flex items-center md:hidden space-x-4">
          {/* Mobile Search Icon / Close Icon Toggle */}
          <div className="relative">
            {" "}
            {/* Added relative positioning for the dropdown */}
            <button
              onClick={toggleSearch}
              className="text-gray-700 hover:text-gray-900"
              id="mobile-search-toggle-button" // Added ID for click outside logic
            >
              {isSearchVisible ? (
                // X icon when search is visible
                <CloseIcon className="w-6 h-6" />
              ) : (
                // Search icon when search is not visible
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              )}
            </button>
            {/* Mobile Search Input Dropdown */}
            {isSearchVisible && (
              <div
                ref={searchContainerRef} // Use the same ref for both desktop/mobile
                className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-40"
              >
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex flex-col gap-3"
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-base"
                  >
                    SEARCH
                  </button>
                  {/* Removed the separate close button from here */}
                </form>
              </div>
            )}
          </div>
          {/* Mobile Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full Menu Content (Slide-out menu) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
          <div className="bg-white p-6 shadow-xl w-64 h-full overflow-y-auto relative pointer-events-auto">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            >
              {/* Changed to CloseIcon for the close icon */}
              <CloseIcon className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-start space-y-2 mt-4">
              {/* Primary navigation links */}
              <div className="md:hidden flex flex-col items-start w-full space-y-2">
                <Link
                  to="/free-templates"
                  onClick={toggleMenu}
                  className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                    "/free-templates",
                    "text-gray-700"
                  )}`}
                >
                  Free Templates
                </Link>
                <Link
                  to="/premium-templates"
                  onClick={toggleMenu}
                  className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                    "/premium-templates",
                    "text-gray-700"
                  )}`}
                >
                  Premium Templates
                </Link>
                <Link
                  to="/template-license"
                  onClick={toggleMenu}
                  className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                    "/template-license",
                    "text-gray-700"
                  )}`}
                >
                  Template License
                </Link>
                <Link
                  to="/remove-credit"
                  onClick={toggleMenu}
                  className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                    "/remove-credit",
                    "text-gray-700"
                  )}`}
                >
                  Remove Credit
                </Link>
                <Link
                  to="/contact-us"
                  onClick={toggleMenu}
                  className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                    "/contact-us",
                    "text-gray-700"
                  )}`}
                >
                  Contact Us
                </Link>
                <hr className="w-full border-gray-200 my-2" />
              </div>
              <Link
                to="/html-templates"
                onClick={toggleMenu}
                className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                  "/html-templates",
                  "text-gray-700"
                )}`}
              >
                HTML Templates
              </Link>
              <Link
                to="/html-landing-pages"
                onClick={toggleMenu}
                className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                  "/html-landing-pages",
                  "text-gray-700"
                )}`}
              >
                HTML Landing Pages
              </Link>
              <Link
                to="/html-email-templates"
                onClick={toggleMenu}
                className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                  "/html-email-templates",
                  "text-gray-700"
                )}`}
              >
                HTML Email Templates
              </Link>
              <Link
                to="/html-snippets"
                onClick={toggleMenu}
                className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                  "/html-snippets",
                  "text-gray-700"
                )}`}
              >
                HTML Snippets
              </Link>
              <hr className="w-full border-gray-200 my-2" />
              <Link
                to="/about-us"
                onClick={toggleMenu}
                className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                  "/about-us",
                  "text-gray-700"
                )}`}
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                onClick={toggleMenu}
                className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                  "/contact-us",
                  "text-gray-700"
                )}`}
              >
                Contact Us
              </Link>
              <Link
                to="/privacy-policy"
                onClick={toggleMenu}
                className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                  "/privacy-policy",
                  "text-gray-700"
                )}`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                onClick={toggleMenu}
                className={`block py-2 px-4 w-full rounded-md hover:bg-gray-100 ${getLinkClass(
                  "/terms-conditions",
                  "text-gray-700"
                )}`}
              >
                Terms & Conditions
              </Link>
              <hr className="w-full border-gray-200 my-2" />
              <div className="flex justify-center w-full mt-4 space-x-4">
                {/* Social Media Icons - Styled as buttons */}
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors duration-200"
                >
                  <CloseIcon className="w-6 h-6" /> {/* Changed to CloseIcon */}
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors duration-200"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
                >
                  <PinterestIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
