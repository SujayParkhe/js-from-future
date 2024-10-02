function logger() {
  console.log("Logging the function");
}

logger();
logger();
logger();

function fruitProcessor(apples, bananas) {
  console.log(apples, bananas);
  const juice = `Juice with ${apples} apples and ${bananas} bananas`;
  return juice;
}

const mixFruitJuice = fruitProcessor(3, 5);
console.log(mixFruitJuice);

/* Function Declaration */

const sujayAge = calcAge(1995);
console.log(sujayAge);

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  return age;
}

const skyAge = calcAge(2020);
console.log(skyAge);

/* Function Expression */

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const luffyAge = calcAge(1995);
console.log(luffyAge);

/* Function calling other function */

function fruitCutter(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, bananas) {
  const applePieces = fruitCutter(apples);
  const bananaPieces = fruitCutter(bananas);
  const juice = `Juice with ${applePieces} pieces of apples and ${bananaPieces} pieces of bananas`;
  return juice;
}

const mixFruitJuiceWithPieces = fruitProcessor(2, 3);
console.log(mixFruitJuiceWithPieces);
