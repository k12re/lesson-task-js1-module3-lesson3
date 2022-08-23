//Question 1

const greet = (name) => `Hello ${name}`;

const add = (a, b) => a + b;

//Question 2

const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (results) {
    console.log(results.length);
  })
  .catch(function (error) {
    console.log(error);
  });
