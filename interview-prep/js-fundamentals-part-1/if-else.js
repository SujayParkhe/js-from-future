const age = 15;
const checkAgeForLicense = age >= 18;

if (checkAgeForLicense) {
  console.log("Is eligible for licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Is not eligible, Come back after ${yearsLeft} years`);
}

const birthYear = 2020;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
