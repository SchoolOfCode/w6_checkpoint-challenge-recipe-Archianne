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
  handleFoodChange(data.hits);
}

