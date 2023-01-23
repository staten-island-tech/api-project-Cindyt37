@import "../styles/search.css";

const DOMSelectors = {
  searchForm: document.querySelector(".search-form"),
  searchInput: document.querySelector(".search-bar"),
  searchResults: document.querySelector(".searched-character"),
  emptyInput: document.querySelector(".empty-input"),
  characterUnfound: document.querySelector(".character-not-found"),
  errorSection: document.querySelector(".errors"),
  resultSection: document.querySelector(".searching-results"),
};

const pgNumber = Math.floor(Math.random() * 149 + 1);
const URL = "https://api.disneyapi.dev/characters?page=" + pgNumber;

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.searchResults.innerHTML = "";
    const searchParams = DOMSelectors.searchInput.value.trim();
    const searchQuery = async function () {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        const results = data.results;

        function checkForBlanks() {
          if (searchParams === "") {
            DOMSelectors.resultSection.classList.add("hidden");
            DOMSelectors.emptyInput.classList.remove("hidden");
          } else {
            DOMSelectors.resultSection.classList.remove("hidden");
            DOMSelectors.emptyInput.classList.add("hidden");
          }
        }
        checkForBlanks();

        function noResults() {
          if (data.num_results === 0) {
            DOMSelectors.characterUnfound.classList.remove("hidden");
          } else {
            DOMSelectors.characterUnfound.classList.add("hidden");
          }
        }
        noResults();

        function displayCharacters() {
          results.forEach((character) => {
            DOMSelectors.searchResults.insertAdjacentHTML(
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
          });
        }
        displayCharacters();
      } catch (error) {
        console.log(error);
        alert("Search Error Occured, Please Try Again Later.");
      }
    };
    searchQuery();
  });
};
listen();
