// js/recipes.js
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("recipeContainer");

  try {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef");
    const data = await res.json();
    const meals = data.meals.slice(0, 9); // Limit to 9

    meals.forEach(meal => {
      container.innerHTML += `
        <div class="recipe-card">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="recipe-img" />
          <h3>${meal.strMeal}</h3>
        </div>
      `;
    });
  } catch (err) {
    container.innerHTML = `<p>Could not load recipes. Try again later.</p>`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const recipeList = document.getElementById("recipeList");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      recipeList.innerHTML = "";
      data.forEach((user) => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>City:</strong> ${user.address.city}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
        `;
        recipeList.appendChild(card);
      });
    })
    .catch((err) => {
      recipeList.innerHTML = "<p>Something went wrong!</p>";
      console.error("API Error:", err);
    });
});

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