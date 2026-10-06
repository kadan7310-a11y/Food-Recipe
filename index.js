const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Default load
fetchRecipes("Chicken");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchRecipes(query);
  }
});

async function fetchRecipes(food) {
  container.innerHTML = "<p style='text-align:center; grid-column:1/-1;'>Loading...</p>";
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
  const data = await res.json();
  
  container.innerHTML = "";
  if (!data.meals) {
    container.innerHTML = `<p style='text-align:center; grid-column:1/-1;'>No recipe found for ${food}</p>`;
    return;
  }

  data.meals.forEach(meal => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <div class="card-body">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea} | ${meal.strCategory}</p>
      </div>
    `;
    card.addEventListener("click", () => {
      window.open(meal.strYoutube, "_blank");
    });
    container.appendChild(card);
  });
}