// const sujay = {
//   firstName: "Sujay",
//   lastName: "Parkhe",
//   age: 2024 - 1995,
//   profession: "FrontEnd Engineer",
//   friends: ["Luffy", "Zoro", "Sanji"],
// };

// // Dot Notation
// console.log(sujay.lastName);

// // Brakcet Notation
// console.log(sujay["lastName"]);

// const nameKey = "Name";
// console.log(sujay["first" + nameKey]);
// console.log(sujay["last" + nameKey]);

// const interestedInfo = prompt(
//   "What do want to know about Sujay? Choose between firstName, lastName, age, job and friends"
// );

// if (sujay[interestedInfo]) {
//   console.log(sujay[interestedInfo]);
// } else {
//   console.log("Please enter correct keyword");
// }

// Adding new properties to Object
// sujay.location = "Mumbai";
// sujay["socialHandle"] = "@sparkhe7";

// console.log(sujay);

// // Challenge
// console.log(
//   `${sujay.firstName} has ${sujay.friends.length} and his best friend is called ${sujay.friends[0]}`
// );

/* Object Methods */
const sujay = {
  firstName: "Sujay",
  lastName: "Parkhe",
  birthYear: 1995,
  profession: "FrontEnd Engineer",
  friends: ["Luffy", "Zoro", "Sanji"],
  hasDriversLicence: true,
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    this.summary = `${this.firstName} is a ${this.age}-year old ${
      this.profession
    }, and he has ${this.hasDriversLicence ? "a" : "no"} driver's license`;
    return this.summary;
  },
};
console.log(sujay);

sujay.calcAge();
console.log(sujay.age);

sujay.getSummary();
console.log(sujay.summary);
