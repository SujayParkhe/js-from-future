"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let defaultScore = 20;
let defaultHighscore = 0;
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const body = document.querySelector("body");
const message = document.querySelector(".message");
const highscore = document.querySelector(".highscore");

const displayMessage = (msg) => {
  message.textContent = msg;
};

const updateScore = (newScore) => {
  score.textContent = newScore;
};

const handleLoss = () => {
  displayMessage("You lost the game!");
  updateScore(0);
};

const guessNumber = () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number");
  } else if (guess === secretNumber) {
    displayMessage("Correct number");
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (defaultScore > defaultHighscore) {
      defaultHighscore = defaultScore;
      highscore.textContent = defaultHighscore;
    }
  } else if (guess !== secretNumber) {
    if (defaultScore > 1) {
      displayMessage(guess > secretNumber ? "Too High!!" : "Too Low!!");
      defaultScore = defaultScore - 1;
      updateScore(defaultScore);
    } else {
      message.textContent = "You lost the game!";
      handleLoss();
    }
  }
};

const resetGame = () => {
  let guess = document.querySelector(".guess");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  defaultScore = 20;
  updateScore(defaultScore);
  number.textContent = "?";
  displayMessage("Start guessing...");
  guess.value = "";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
};

const button = document.querySelector(".check");
button.addEventListener("click", guessNumber);

const resetGameButton = document.querySelector(".again");
resetGameButton.addEventListener("click", resetGame);
