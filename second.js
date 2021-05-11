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
  console.log(cocktailData.drinks[0].strDrink);
  const cocktail = cocktailData.drinks[0];
  
  cocktailResult.innerHTML = `<p>${cocktail.strDrink}</p>`;
}

randomCocktail();
