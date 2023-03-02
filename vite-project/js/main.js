import "../styles/style.css";

const pgNumber = Math.floor(Math.random() * 149 + 1);
const URL = "https://api.disneyapi.dev/characters?page=" + pgNumber;
const response = await fetch(URL);
const data = await response.json();
console.log(data);

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object so we can use
    function displayCharacters() {
      data.data.forEach((character) => {
        document.getElementById("api-response").insertAdjacentHTML(
          "afterbegin",
          `<div class= "character-card" id="${character.name}">
          <div class="character-imgBox">
                <img class="character-img" src=${character.imageUrl} alt="${character.name}"></div>
                <div class="character-words">              
                <h3 class= "character-name">${character.name}</h3>
                <h3 class="character-info-title">Films/TV Shows ${character.name} is in:</h3>
                <h3 class="character-info">${character.tvShows}</h3>
                <h3 class="character-info">${character.films}</h3>
                <h6 class="character_ID">Character ID: ${character._id}</h6>
                </div>  
            </div>`
        );
      });
    }
    displayCharacters();
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
}
getData(URL);
