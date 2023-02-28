import "../styles/search.css";

const DOMSelectors = {
  searchForm: document.querySelector(".search-form"),
  searchInput: document.querySelector(".search-bar"),
  searchResults: document.querySelector(".searched-character"),
  emptyInput: document.querySelector(".empty-input"),
  characterUnfound: document.querySelector(".character-not-found"),
  errorSection: document.querySelector(".errors"),
  resultSection: document.querySelector(".searching-results"),
};

async function getData() {
  try {
    const response = await fetch(`https://api.disneyapi.dev/character`);
    if (response.status < 200 || response.status > 299) {
      throw error(response);
    } else {
      const data = await response.json();
      console.log(data);
      function displaySearch() {
        DOMSelectors.resultSection.insertAdjacentHTML(
          "beforeend",
          `<div class= "character-card" id="${character.name}">
            <div class="character-imgBox">
                  <img class="character-img" src=${character.imageUrl} alt="${character.name}"></div>
                  <div class="character-words">              
                  <h3 class= "character-name">${character.name}</h3>
                  <h3 class="character-info-title">Films/TV Shows ${character.name} is in:</h3>
                  <h3 class="character-info">${character.tvShows}</h3>
                  <h3 class="character-info">${character.films}</h3>
                  <h5 class="character-link"><a href="https://api.disneyapi.dev/${character.name}/137">https://api.disneyapi.dev/${character.name}/137</a></h5></div>  
              </div>`
        );
      }
      displaySearch();
    }
  } catch (error) {
    console.log(error);
    DOMSelectors.search_output.insertAdjacentHTML(
      "beforeend",
      `<div class="error-msg">Search error occur, please try again later.</div>`
    );
  }
}

DOMSelectors.form.addEventListener("submit", function (event) {
  DOMSelectors.search_output.innerHTML = "";
  event.preventDefault();
  getData(DOMSelectors.input.value);
  DOMSelectors.input.value = "";
});
