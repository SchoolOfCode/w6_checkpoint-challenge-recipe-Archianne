//other API's

const backgroundCover = document.querySelector(".background-cover");
const cocktailResult = document.querySelector(".cocktail-result");

async function getRandomPicture() {
  const url = "https://foodish-api.herokuapp.com/api";
  const response = await fetch(url);
  const picData = await response.json();
  backgroundCover.style.backgroundImage = `url(${picData.image})`;
}
getRandomPicture();

async function randomCocktail() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const response = await fetch(url);
  const cocktailData = await response.json();
  const cocktail = cocktailData.drinks[0];
  
  cocktailResult.innerHTML = `
  <h2 id="cocktail-title">${cocktail.strDrink}</h2>
  <img id="cocktail-picture" src="${cocktail.strDrinkThumb}">
  <ul>
  </ul>
  `;

  //get ingredients
  cocktailIngredients = document.querySelector("ul");
  const getIngredients = Object.keys(cocktail)
     .filter(function (ingredient) {
       return ingredient.indexOf("strIngredient") == 0;
     })
     .reduce(function (ingredients, ingredient) {
       if (cocktail[ingredient] != null) {
         ingredients[ingredient] = cocktail[ingredient];
       }
       return ingredients;
     }, {});
  
   for (let key in getIngredients) {
     let value = getIngredients[key];
     listIngredients = document.createElement("li");
     listIngredients.innerHTML = value;
     cocktailIngredients.appendChild(listIngredients);
   }
}

