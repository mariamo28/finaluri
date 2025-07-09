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


document.addEventListener("DOMContentLoaded", () => {
  // Header shrink on scroll
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll to Top button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.className = "scroll-top";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll animation for sections
  const animatedSections = document.querySelectorAll(".animate");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    animatedSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  // Shrink header on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll to Top Button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.className = "scroll-top";
  scrollBtn.style.display = "none";
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // Animate on scroll
  const animatedSections = document.querySelectorAll(".animate");
  const reveal = () => {
    const trigger = window.innerHeight * 0.8;
    animatedSections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < trigger) section.classList.add("show");
      else section.classList.remove("show");
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();

  // Cookie Notification (localStorage)
  const cookieBox = document.querySelector(".cookie-box");
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBox.style.display = "flex";
  }

  document.getElementById("acceptCookies").addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBox.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Header shrink on scroll
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll to Top button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.className = "scroll-top";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll animation for sections
  const animatedSections = document.querySelectorAll(".animate");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    animatedSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  // Shrink header on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }})
  });

  // Scroll to Top Button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.className = "scroll-top";
  scrollBtn.style.display = "none";
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // Animate on scroll
  const animatedSections = document.querySelectorAll(".animate");
  const reveal = () => {
    const trigger = window.innerHeight * 0.8;
    animatedSections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < trigger) section.classList.add("show");
      else section.classList.remove("show");
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();

 
  document.addEventListener("DOMContentLoaded", function () {
    const cookieBox = document.getElementById("cookieBox");
    const acceptBtn = document.getElementById("acceptCookies");

    // Show cookie box if not accepted before
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieBox.style.display = "block";
    }

    // On accept button click
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBox.style.display = "none";
    });
  });



 const burger = document.getElementById('burgerToggle');
  const navMenu = document.getElementById('navMenu');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });