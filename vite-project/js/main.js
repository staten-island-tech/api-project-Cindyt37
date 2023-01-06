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

const URL = "https://api.quotable.io/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object so we can use
    document.getElementById("api-response").insertAdjacentHTML(
      "afterbegin",
      `<h3>Quote of the Day:</h3>
        <p>${data.content}</p>`
    );
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
