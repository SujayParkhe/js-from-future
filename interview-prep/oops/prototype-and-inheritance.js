let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};

Person.prototype.calAge = function () {
  let age = 2024 - this.birthYear;
  console.log("AGE", age);
};

Person.prototype.city = "Mumbai";

let person1 = new Person("Sujay", "Male", 1995);
// person1.calAge();
person1.hasOwnProperty("name"); // true
person1.hasOwnProperty("city"); // false
console.log(person1);
let person2 = new Person("Sky", "Male", 2020);
// person2.calAge();
console.log(person2);
let person3 = new Person("Luffy", "Male", 2000);
// person3.calAge();
console.log(person3);
