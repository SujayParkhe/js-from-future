class Person {
  constructor(name, birthYear, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  }
  calcAge() {
    console.log("Age:", 2020 - this.birthYear);
  }

  static greet() {
    console.log("Hello, how are you?");
  }
}

let john = new Person("John", 1990, "Male");
console.log(john);
Person.greet();

let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;

  Person.prototype.calAge = function () {
    let age = 2024 - this.birthYear;
    console.log("AGE", age);
  };
};
Person.greet = () => {
  console.log("Hello, how are you?");
};

let mark = new Person("Mark", "Male", 2005);
console.log(mark);
Person.greet();
