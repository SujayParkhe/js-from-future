"use strict";

// const message = (document.querySelector(".message").textContent =
//   "Correct Number!");
// const number = (document.querySelector(".number").textContent = 13);
// const score = (document.querySelector(".score").textContent = 15);
// const guess = document.querySelector(".guess").value;
// console.log(guess);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let defaultScore = 20;
document.querySelector(".number").textContent = secretNumber;
const score = document.querySelector(".score");

const guessNumber = () => {
  const guess = Number(document.querySelector(".guess").value);
  const message = document.querySelector(".message");
  console.log(score);

  if (!guess) {
    message.textContent = "No Number";
  } else if (guess === secretNumber) {
    message.textContent = "Correct number"
  } else if (guess > secretNumber) {
    message.textContent = "Too High!!"
    defaultScore = defaultScore - 1;
    score.textContent = defaultScore;
  } else if (guess < secretNumber) {
    message.textContent = "Too Low!!"
    defaultScore = defaultScore - 1;
    score.textContent = defaultScore;
  }
};

const button = document.querySelector(".check");
button.addEventListener("click", guessNumber);
