function registerUser() {
  const username = document.getElementById("reg-username").value
  const password = document.getElementById("reg-password").value
  const email = document.getElementById("reg-email").value

  if (username && password && email) {
    const user = { username, password, email }
    localStorage.setItem("user", JSON.stringify(user))
    alert("Registration successful!")
    document.getElementById("register-container").style.display = "none"
    document.getElementById("login-container").style.display = "block"
  } else {
    alert("Please fill all fields.")
  }
}

function loginUser() {
  const username = document.getElementById("login-username").value
  const password = document.getElementById("login-password").value
  const storedUser = JSON.parse(localStorage.getItem("user"))

  if (
    storedUser &&
    storedUser.username === username &&
    storedUser.password === password
  ) {
    document.getElementById("login-container").style.display = "none"
    document.getElementById("success-container").style.display = "block"
  } else {
    alert("Invalid username or password!")
  }
}

function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId)
  if (input.type === "password") {
    input.type = "text"
    btn.textContent = "Hide"
  } else {
    input.type = "password"
    btn.textContent = "Show"
  }
}
