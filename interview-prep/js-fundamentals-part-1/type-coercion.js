// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);

console.log(Number("abcder"));
console.log(typeof NaN);

console.log(String(29));

// Type Coercion
// The + operator coerces the value into strings
console.log(5 + "2");
console.log("2" + 5);
// The -, *, / operator coerces the value into numbers
console.log(10 - "5");
console.log("10" * 5);
console.log(20 / "5");
