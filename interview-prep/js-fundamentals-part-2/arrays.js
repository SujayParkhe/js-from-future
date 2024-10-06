// const friends = ["Luffy", "Zoro", "Sanji", "Nami", "Chopper"];
// console.log(friends);

// const years = new Array(1991, 2008, 2015, 2020, 2024);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// // This update is possible
// friends[2] = "WhiteBeard";
// console.log(friends);

// // This isn't
// // friends = ["Blackbeard", "Laffite"];

// const firstName = "Sujay";

// const sujay = [firstName, "Parkhe", 2024 - 1995, "FrontEnd Engineer", friends];
// console.log(sujay);

// // Exercise
// const calcAge = (birthYear) => {
//   return 2024 - birthYear;
// };

// const birthYears = [1990, 1967, 2002, 2010, 2018];

// // for (let i = 0; i < birthYears.length; i++) {
// //   console.log(`${i}:`, calcAge(birthYears[i]));
// // }
// const ageFirst = calcAge(birthYears[0]);
// const ageSecond = calcAge(birthYears[1]);
// const ageLast = calcAge(birthYears[birthYears.length - 1]);

// console.log(ageFirst);
// console.log(ageSecond);
// console.log(ageLast);

// const ages = [ageFirst, ageSecond, calcAge(birthYears[birthYears.length - 1])];
// console.log(ages);

/* Basic Array Methods */
const friends = ["Luffy", "Zoro", "Sanji", "Nami", "Chopper"];

// 1. Push Method
const friendsLength = friends.push("WhiteBeard");
console.log("Push", friends);
console.log(friendsLength);

// 2. Unshift Method
friends.unshift("Sky");
console.log("Unshift", friends);

// 3. Pop Method
const poppedElement = friends.pop();
console.log("Pop", friends);
console.log(poppedElement);

// 4. Shift Method
friends.shift();
console.log("Shift", friends);

// 5. indexOf()
console.log(friends.indexOf("Zoro"));
console.log(friends.indexOf("Yassop"));

// 6. includes()
console.log(friends.includes("Nami"));
console.log(friends.includes("Yassop"));
