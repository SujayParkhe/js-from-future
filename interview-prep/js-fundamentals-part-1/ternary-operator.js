const age = 16;

const isAdult =
  age >= 18 ? "He is an adult" : "He is not an adult";
console.log(isAdult)

let drink;
if (age >= 18) {
    drink = "wine 🍷"
} else {
    drink = "water 💧"
}
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`)