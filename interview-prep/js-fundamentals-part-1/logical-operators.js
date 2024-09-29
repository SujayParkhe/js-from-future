// const age = 16;

// const A = age >= 20;
// const B = age < 30;
// console.log("A", A);
// console.log("B", B);

// // NOT Operator
// const NOT = !A;
// console.log("!A", NOT);

// // AND Operator
// const AND = A && B;
// console.log("A && B", AND);

// // OR Operator
// const OR = A || B;
// console.log("A || B", OR);

// // Multiple Operators
// const multipleOperators = !A && B;
// console.log("!A && B", multipleOperators);

// const multipleOperatorsTwo = A || !B;
// console.log("A || !B", multipleOperatorsTwo);

const hasDriverLicence = true; // A
const hasGoodVision = true; // B

console.log("AND Operator", hasDriverLicence && hasGoodVision);
console.log("OR Operator", hasDriverLicence || hasGoodVision);
console.log("NOT Operator", !hasDriverLicence);

// if (hasDriverLicence && hasGoodVision) {
//   console.log("She is eligible for driving");
// } else {
//   console.log("She should take public transport");
// }

const isTired = false; // C
console.log(
  "Multiple OR Operator",
  hasDriverLicence || hasGoodVision || isTired
);
console.log(
  "Multiple AND Operator",
  hasDriverLicence && hasGoodVision && isTired
);

if (hasDriverLicence && hasGoodVision && !isTired) {
  console.log("She is eligible for driving");
} else {
  console.log("She should take public transport");
}
