const backgroundCover = document.querySelector(".background-cover");

async function getRandomPicture() {
  const url = "https://foodish-api.herokuapp.com/api";
  const response = await fetch(url);
  const data = await response.json();
  backgroundCover.style.backgroundImage = `url(${data.image})`;
}
getRandomPicture();

