let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
  this.calAge = function () {
    let age = 2024 - this.birthYear;
    console.log("AGE", age);
  };
};

let person1 = new Person("Sujay", "Male", 1995);
let person2 = new Person("Sky", "Male", 2020);
let person3 = new Person("Luffy", "Male", 1995);

// New operator does three things
// 1. Creates an empty object
// let person1 = {};

//2. makes sure that the this variable is pointing to the empty object
// this = person1;
// person1.name = "Sujay";
// person1.gender = "Male";
// person1.birthYear = 1995;
// person1.calAge = function(){}

// 3. returns the object from the constructor function
// return this;
