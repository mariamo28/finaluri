

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  burger.addEventListener("click", () => {
    // Toggle visibility
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  });
});

 const burger = document.getElementById('burgerToggle');
  const navMenu = document.getElementById('navMenu');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });