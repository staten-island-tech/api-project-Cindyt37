import "../styles/search.css";

const DOMSelectors = {
  form: document.querySelector(".search-form"),
  searchInput: document.querySelector(".search-bar"),
  results: document.querySelector(".searched-character"),
  input: document.getElementById("searchInput"),
  search_output: document.getElementById("searching-results"),
};

async function getData(characterID) {
  try {
    const response = await fetch(
      `https://api.disneyapi.dev/characters/${characterID}`
    );
    if (response.status < 200 || response.status > 299) {
      throw error(response);
    } else {
      const data = await response.json();
      console.log(data);
      function displaySearch() {
        DOMSelectors.search_output.insertAdjacentHTML(
          "beforeend",
          `<div class= "character-card" id="${data.name}">
          <div class="character-imgBox">
                <img class="character-img" src=${data.imageUrl} alt="${data.name}"></div>
                <div class="character-words">              
                <h3 class= "character-name">${data.name}</h3>
                <h3 class="character-info-title">Films/TV Shows ${data.name} is in:</h3>
                <h3 class="character-info">${data.tvShows}</h3>
                <h3 class="character-info">${data.films}</h3>
                <h5 class="character-link"><a href="https://api.disneyapi.dev/characters/${data._id}">https://api.disneyapi.dev/characters/${data._id}</a></h5></div>  
            </div>`
        );
      }
      displaySearch();
    }
  } catch (error) {
    console.log(error);
    DOMSelectors.search_output.insertAdjacentHTML(
      "beforeend",
      `<div class="error-msg">Sorry, the ID you inputed cannot be found. Please check and try again later.</div>`
    );
  }
}

DOMSelectors.form.addEventListener("submit", function (event) {
  DOMSelectors.search_output.innerHTML = "";
  event.preventDefault();
  getData(DOMSelectors.input.value);
  DOMSelectors.input.value = "";
});
