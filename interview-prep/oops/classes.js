// There are two ways to create a class
// 1. Class Declaration

class Person {
  constructor(name, birthYear, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  }
  calcAge() {
    console.log("Age:", 2020 - this.birthYear);
  }
}

Person.prototype.greet = function () {
  console.log("Good morning!! " + this.name);
};

let person1 = new Person("Sujay", 1995, "Male");
person1.calcAge();
person1.greet();
console.log(person1);
let person2 = new Person("Mary", 2000, "Female");
console.log(person2);

// // 2. Class Expression
// export let Person = class {

// }
