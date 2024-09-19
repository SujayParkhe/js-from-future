// Parent class
let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};

Person.prototype.calAge = function () {
  let age = 2024 - this.birthYear;
  console.log("AGE", age);
};

let sky = new Person("Sky", "Male", 2020);
console.log(sky);

// this = mark
// Child class
let Employee = function (name, gender, birthYear, employeeId, monthlySalary) {
  Person.call(this, name, gender, birthYear);
  this.employeeId = employeeId;
  this.monthlySalary = monthlySalary;
};

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.calcSalary = function () {
  let annualSalary = this.monthlySalary * 12;
  return annualSalary;
};

Employee.prototype.empDetails = function () {
  console.log(
    `Employee name is: ${this.name} and his ID is: ${this.employeeId}`
  );
};

let mark = new Employee("Mark", "Male", 1992, 101, 12000);
mark.calAge();
console.log(mark);
