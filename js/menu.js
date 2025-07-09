 const burger = document.getElementById('burgerToggle');
  const navMenu = document.getElementById('navMenu');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
