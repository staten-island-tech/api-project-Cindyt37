import "../styles/style.css";

const URL = "https://api.disneyapi.dev/characters";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object so we can use
    function displayCharacters() {
      data.data.forEach((character) => {
        document.getElementById("api-response").insertAdjacentHTML(
          "afterbegin",
          `<div class= "character-card" id="${character.name}">
                <img class="img" src=${character.imageUrl} alt="">                
                <h3 class= "character-name">${character.name}</h3>
                <p class="character-info-title">Films/TV Shows ${character.name} is in:</p>
                <p class="character-info">${character.tvShows}</p>
                <p class="character-info">${character.films}</p>
                <a class="link" href="https://api.disneyapi.dev/${character.name}/137"></a>
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
