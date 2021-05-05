const searchForm = document.querySelector("form");
const searchResult = document.querySelector(".searchResult");
const container = document.querySelector(".container");
let foodToSearch = null;

//important
const APP_ID = 'acf6c552';
const APP_key = '382791db90157c92aaabdea59f48f996';

//addEventListener
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  foodToSearch = e.target.querySelector("input").value;
  fetchRecipe();
});