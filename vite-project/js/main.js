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

const URL = "https://wizard-world-api.herokuapp.com/swagger/v1/swagger.json";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object so we can use
    console.log(data);
    document.getElementById("api-response").insertAdjacentHTML(
      "afterbegin",
      `<h3>${data.title}</h3>
      <img class="img" src=${data.url} alt="">
        <p>${data.explanation}</p>`
    );
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
