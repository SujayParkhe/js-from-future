const age = "18";

// Strict equality operator
if (age === 18) console.log("You are an adult now!");

// Using Number with strict equality
const favoriteNumber2 = Number(prompt("What is your favorite number"));
console.log(favoriteNumber2); // 23
console.log(typeof favoriteNumber2); // 23

if (favoriteNumber2 === 23) {
  console.log("23 is an amazing number!");
} else if (favoriteNumber2 === 7) {
  console.log("7 is an amazing number!");
} else if (favoriteNumber2 === 9) {
  console.log("9 is an amazing number!");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favoriteNumber2 !== 23) console.log("Why not 23?");

// loosely equality operator
if (age == 18) console.log("You are an adult now!");
const favoriteNumber = prompt("What is your favorite number");
console.log(favoriteNumber); // "23"
console.log(typeof favoriteNumber); // string

if (favoriteNumber == 23) {
  console.log("23 is an amazing number!");
}
