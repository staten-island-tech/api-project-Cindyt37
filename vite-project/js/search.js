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

const listen = function () {
    DOMSelectors.searchForm.addEventListener("submit", function(e) {
        e.preventDefault();
        DOMSelectors.searchResults.innerHTML= ""
        const searchParams = DOMSelectors.searchInput.value.trim();
        const searchQuery = async function() {
            try {
                const pgNumber = Math.floor(Math.random() * 149 + 1);
                const response = await fetch(`https://api.disneyapi.dev/characters?page=" + pgNumber`)
            } catch (error) {
                
            }
        }
       }
}