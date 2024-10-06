// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i} 🏋️`);
// }

// const sujayArray = [
//   "Sujay",
//   "Parkhe",
//   2024 - 1995,
//   "FrontEnd Engineer",
//   ["Luffy", "Zoro", "Sanji"],
// ];

// let types = [];

// for (let i = 0; i < sujayArray.length; i++) {
//   console.log(sujayArray[i], typeof sujayArray[i]);

//   types.push(typeof sujayArray[i]);
//   //   types[i] = typeof sujayArray[i];
// }

// console.log(types);

// const birthYears = [1991, 2007, 2005, 2020];
// const age = [];

// for (let i = 0; i < birthYears.length; i++) {
//   const calcAge = 2024 - birthYears[i];
//   age.push(calcAge);
// }

// console.log(age);

// // Continue and break statement
// console.log("<---! ONLY STRINGS !--->");
// for (let i = 0; i < sujayArray.length; i++) {
//   if (typeof sujayArray[i] !== "string") continue;
//   console.log(sujayArray[i], typeof sujayArray[i]);
// }

// console.log("<---! BREAK WITH NUMBER !--->");
// for (let i = 0; i < sujayArray.length; i++) {
//   if (typeof sujayArray[i] === "number") break;
//   console.log(sujayArray[i], typeof sujayArray[i]);
// }

const sujayArray = [
  "Sujay",
  "Parkhe",
  2024 - 1995,
  "FrontEnd Engineer",
  ["Luffy", "Zoro", "Sanji"],
  true,
];

// Looping backwards
// 4, 3, ..., 0
for (let i = sujayArray.length - 1; i >= 0; i--) {
  console.log(i, sujayArray[i]);
}

// Nested Loops
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---- Starting exercise ${exercise} ----`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weight repition ${rep}`);
  }
}
