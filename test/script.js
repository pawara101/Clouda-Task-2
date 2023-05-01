//const fetch = require('node-fetch');

function displayCocktail(data) {
  const cocktail = data.drinks[0];
  const cocktailDiv = document.getElementById("cocktails");//need to match with HTML division
  // cocktail name
  const cocktailName = cocktail.strDrink;
  const cocktail_pic = cocktail.strDrinkThumb;
  const heading = document.createElement("h3");
  const image = document.createElement("img");
  heading.innerHTML = cocktailName;
  image.src = cocktail_pic
  cocktailDiv.appendChild(heading);
  cocktailDiv.appendChild(image);
}

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log(data);
    displayCocktail(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));
