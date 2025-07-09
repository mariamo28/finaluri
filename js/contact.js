document.addEventListener("DOMContentLoaded", () => {
  // Show/hide password
  const toggleBtn = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  toggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      toggleBtn.textContent = "Show";
    }
  });


  // Form validation
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!name || !email || !password || !message) {
      alert("Please fill out all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Enter a valid email address.");
      return;
    }

    if (!passRegex.test(password)) {
      alert("Password must be at least 6 characters and include numbers and letters.");
      return;
    }

    alert("Message sent successfully!");
    form.reset();
  });


  // Cookies logic
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    banner.style.display = "block";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  });
});



 const burger = document.getElementById('burgerToggle');
  const navMenu = document.getElementById('navMenu');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });