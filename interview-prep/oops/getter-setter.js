let john = {
  name: "John",
  birthYear: 1990,
  annualSalary: 20000,

  get getName() {
    return "Mr. " + this.name;
  },
  set setName(val) {
    this.name = val.length > 4 ? val : "Name shoud be 4 characters";
  },
};

console.log(john.getName);
john.setName = "Sky";
console.log(john.getName);

class User {
  constructor(name, password, role) {
    this.name = name;
    this.password = password;
    this.role = role;
  }

  set setPassword(val) {
    this.password =
      val.length < 4
        ? console.log(
            "Your Password is Too Damn Short, It should have minimum 4 characters"
          )
        : val;
  }
}

const person1 = new User("Mark", "admin123", "admin");
console.log(person1);

person1.setPassword = "adwdsaa";
console.log(person1);
