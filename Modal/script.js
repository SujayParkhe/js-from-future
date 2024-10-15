"use strict";

const showModalButton = document.querySelectorAll(".show-modal");
const closeModalButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModalButton.length; i++) {
  showModalButton[i].addEventListener("click", showModal);
}

closeModalButton.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Escape") {
    hideModal();
  }
});
