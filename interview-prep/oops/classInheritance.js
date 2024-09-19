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

class Employee extends Person {
  constructor(name, birthYear, gender, employeeId, monthlySalary) {
    super(name, birthYear, gender);
    this.employeeId = employeeId;
    this.monthlySalary = monthlySalary;
  }

  calcSalary() {
    let annualSalary = this.monthlySalary * 12;
    return annualSalary;
  }

  empDetails() {
    console.log(
      `Employee name is: ${this.name} and his ID is: ${this.employeeId}`
    );
  }
}

let mark = new Employee("Mark", 1990, "Male", 201, 18000);
console.log(mark);
mark.calcAge();
console.log("Annual Salary:", mark.calcSalary());
mark.empDetails();
