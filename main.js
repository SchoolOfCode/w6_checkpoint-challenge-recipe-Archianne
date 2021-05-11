const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
const button = document.querySelector("#recipe-button");
const input = document.querySelector("#food-input");
let foodToSearch = null;
//important
const APP_ID = "c1d6ad2a";
const APP_key = "0e527f7e2659b24d39614a3dc27b79e6";

function handleRecipeClick() {
  searchResult.innerHTML = "";
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = input.value;
  input.value = "";
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});

//async function
async function fetchRecipe(food) {
  foodToSearch = food;
  const requestUrl = `https://api.edamam.com/search?q=${foodToSearch}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=9`;
  const response = await fetch(requestUrl);
  const data = await response.json();
  handleFood(data.hits);
}

function handleFood(results) {
  results.map((foodToSearch) => {
    let result = foodToSearch.recipe;
    searchResult.innerHTML += `
    <div class="items">
      <a target="_blank" href="${result.url}"><img src="${
        result.image
      }" alt="${result.label}"></a>
    <div class="resultsDisplay">
      <h2 class="title">${result.label}</h2>
      <a class="viewLink" target="_blank" href="${
        result.url
      }">View Recipe</a>
    
    </div>
      <p class="itemInfo">Number of servings: ${result.yield}</p>
      <p class="itemInfo">${result.cuisineType}</p>
      <p class="itemInfo">Calories: ${result.calories.toFixed(0)}</p>
      <p class="itemInfo">Diet label: ${
        result.dietLabels.length > 0
        ? result.dietLabels
        : "Not found"
    } </p>
    </div>
    `;
  });
}
