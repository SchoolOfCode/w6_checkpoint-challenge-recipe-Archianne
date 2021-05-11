const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
let foodToSearch = null;
//important
const APP_ID = "c1d6ad2a";
const APP_key = "0e527f7e2659b24d39614a3dc27b79e6";

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

//async function
async function fetchRecipe(food) {
  foodToSearch = food;
  const requestUrl = `https://api.edamam.com/search?q=${foodToSearch}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=18`;
  const response = await fetch(requestUrl);
  const data = await response.json();
  handleFood(data.hits);
}

function handleFood(results) {
  results.map((foodToSearch) => {
    searchResult.innerHTML += `
    <div class="items">
      <a target="_blank" href="${foodToSearch.recipe.url}"><img src="${
      foodToSearch.recipe.image
      }" alt="${foodToSearch.recipe.label}"></a>
    <div class="resultsDisplay">
      <h2 class="title">${foodToSearch.recipe.label}</h2>
      <a class="viewLink" target="_blank" href="${
      foodToSearch.recipe.url
      }">View Recipe</a>
    
    </div>
      <p class="itemInfo">Number of servings: ${foodToSearch.recipe.yield}</p>
      <p class="itemInfo">${foodToSearch.recipe.cuisineType}</p>
      <p class="itemInfo">Calories: ${foodToSearch.recipe.calories.toFixed(0)}</p>
      <p class="itemInfo">Diet label: ${
      foodToSearch.recipe.dietLabels.length > 0
        ? foodToSearch.recipe.dietLabels
        : "Not found"
    } </p>
    </div>
    `;
  });
}
