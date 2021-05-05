const searchForm = document.querySelector("form");
const input = document.querySelector("#foodInput")
const searchResult = document.querySelector(".searchResult");
const container = document.querySelector(".container");
let foodToSearch = null;

//important
const APP_ID = "acf6c552";
const APP_key = "382791db90157c92aaabdea59f48f996";

//addEventListener
  searchForm.addEventListener("submit", handleRecipeClick);
  
  function handleRecipeClick(e) {
  e.preventDefault();
  foodToSearch = input.value;
  fetchRecipe();
}

//async function
async function fetchRecipe() {
  const baseURL = `https://api.edamam.com/search?q=${foodToSearch}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  handleFood(data.hits);
}

function handleFood(results) {
  container.classList.remove("initial");
  let foodList = "";
  results.map((foodResult) => {
    foodList += `
    
    <div class="item">
      <img src="${foodResult.recipe.image}" alt="img">
    <div class="flex-container">
    <h2 class="title">${foodResult.recipe.label}</h2>
    <a class="view-btn" target="_blank" href="${foodResult.recipe.url}">View Recipe</a>
    <p class="item-data">Number of servings: ${
      foodResult.recipe.yield
    }
    </p>
    </div>
    <p class="item-data">Calories: ${
      foodResult.recipe.calories.toFixed(2)
    }
    </p>
    <p class="item-data">Diet label: ${
      foodResult.recipe.dietLabels.length > 0 ? foodResult.recipe.dietLabels : "No Data Found"
    } 
    </p>
    </div>
    `;
  });

  //add result to html
  searchResult.innerHTML = foodList;
}
