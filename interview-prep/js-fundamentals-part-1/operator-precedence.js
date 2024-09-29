const currentYear = 2024;
const skyAge = currentYear - 2020;
const sujayAge = currentYear - 1995;

console.log(currentYear - 2020 < currentYear - 1995);
// in the above statement the (-) minus operator has higher precedence over (<) operator

// Associativity left-to-right
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 => x = 10;
// Assignment operator works from right-to-left
console.log(x, y);

console.log("Sujay Age", sujayAge);
console.log("Sky Age", skyAge);
// Grouping
const averageAge = (sujayAge + skyAge) / 2;
console.log("Average", averageAge);
