"use strict";

// const message = (document.querySelector(".message").textContent =
//   "Correct Number!");
// const number = (document.querySelector(".number").textContent = 13);
// const score = (document.querySelector(".score").textContent = 15);
// const guess = document.querySelector(".guess").value;
// console.log(guess);

const guessNumber = () => {
  const guess = Number(document.querySelector(".guess").value);
  const message = document.querySelector(".message");
  console.log(guess);

  if (!guess) {
    message.textContent = "No Number";
  }
};

const button = document.querySelector(".check");
button.addEventListener("click", guessNumber);
