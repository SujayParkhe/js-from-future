// Encapsulation
class person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name}, Address is: ${this.add}`);
  }
}

let person1 = new person("Sudheer", "123");
person1.add_Address("Bangalore");
person1.getDetails();
