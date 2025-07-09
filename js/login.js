// js/login.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Show/Hide password
  toggleBtn.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    toggleBtn.textContent = type === "password" ? "Show" : "Hide";
  });

  // Form validation
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    emailError.textContent = "";
    passwordError.textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput.value || !emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email.";
      isValid = false;
    }

    if (!passwordInput.value) {
      passwordError.textContent = "Password is required.";
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("userEmail", emailInput.value);
      alert("Login successful!");
      form.reset();
    }
  });
});

