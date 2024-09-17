var personDetails = {
  name: "Sujay",
  age: 28,
};

var object = new Object();
var objectWithoutNew = Object();
var objectWithCreate = Object.create(null);

let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};

var car = Object.create(vehicle);

function Person(name) {
  this.name = name;
  this.age = 21;
}
var objectWithFunctionConstructor = new Person("Sujay");

function Person2() {}
Person2.prototype.name = "Sudheer";
var objectWithFunctionConstructorAndPrototype = new Person2();
console.log(objectWithFunctionConstructorAndPrototype.name);

let user = {
  name: "Sky",
  role: "admin",
  access: "read-write",

  addUser() {
    // Logic to add user
  },
  removeUser() {
    // Logic to remove user
  },
};
