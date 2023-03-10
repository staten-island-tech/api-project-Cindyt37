import "../styles/style.css";

const DOMSelectors = {
  form: document.querySelector(".search-form"),
  searchInput: document.querySelector(".search-bar"),
  results: document.querySelector(".searched-character"),
  input: document.getElementById("searchInput"),
  search_output: document.getElementById("search-response"),
  output: document.getElementById("api-response"),
  btn: document.getElementById("list-btn"),
};

const pgNumber = Math.floor(Math.random() * 149 + 1);
const URL = "https://api.disneyapi.dev/characters?page=" + pgNumber;

async function getCharacters(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object so we ca use
    function displayCharacters() {
      data.data.forEach((dataa) => {
        DOMSelectors.output.insertAdjacentHTML(
          "afterbegin",
          `<div class= "character-card" id="${dataa.name}">
          <div class="character-imgBox">
                <img class="character-img" src=${dataa.imageUrl} alt="${dataa.name}"></div>
                <div class="character-words">              
                <h3 class= "character-name">${dataa.name}</h3>
                <h3 class= "character-id">ID: ${dataa._id}</h3>
                <h4 class="character-link"><a href="https://api.disneyapi.dev/characters/${dataa._id}">https://api.disneyapi.dev/characters/${dataa._id}</a></h4></div>  
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
getCharacters(URL);

async function getData(characterID) {
  try {
    const response = await fetch(
      `https://api.disneyapi.dev/characters/${characterID}`
    );
    const data = await response.json();
    console.log(data);
    function displaySearch() {
      DOMSelectors.search_output.insertAdjacentHTML(
        "afterbegin",
        `<div class= "character-card" id="${data.name}">
          <div class="character-imgBox">
                <img class="character-img" src=${data.imageUrl} alt="${data.name}"></div>
                <div class="character-words">              
                <h3 class= "character-name">${data.name}</h3>
                <h3 class="character-id">${data._id}</h3>
                <h5 class="character-link"><a href="https://api.disneyapi.dev/characters/${data._id}">https://api.disneyapi.dev/characters/${data._id}</a></h5></div>  
            </div>`
      );
    }
    displaySearch();
  } catch (error) {
    console.log(error);
    DOMSelectors.search_output.insertAdjacentHTML(
      "beforeend",
      `<div class="error-msg">Sorry, wrong number. There is no character with that number. Try another one.</div>`
    );
  }
}

function clear() {
  DOMSelectors.output.innerHTML = "";
  DOMSelectors.search_output.innerHTML = "";
}

DOMSelectors.form.addEventListener("submit", function (event) {
  clear();
  event.preventDefault();
  getData(DOMSelectors.input.value);
  DOMSelectors.input.value = "";
});

DOMSelectors.btn.addEventListener("click", function () {
  clear();
  getCharacters(URL);
});
