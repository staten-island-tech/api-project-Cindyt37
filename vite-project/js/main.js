import "../styles/style.css";

// console.log("start");
// setTimeout(() => {
//   console.log("Timer");
// }, 5000);
// console.log("end");

// function greet(name) {
//   const greetPromise = new Promise(function (resolve, reject) {
//     resolve(`Hello ${name}`);
//   });
//   return greetPromise;
// }
// const sophie = greet("Sophie");
// sophie.then((result) => {
//   console.log(result);
// });

const URL = "https://api.disneyapi.dev/characters";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object so we can use
    function displayCharacters() {
      data.data.forEach((character) => {
        document.getElementById("api-response").insertAdjacentHTML(
          "afterbegin",
          `<h3>${character.name}</h3>
      <img class="img" src=${character.imageUrl} alt="">
      <p>${character.url}</p>`
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
