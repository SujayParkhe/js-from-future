let person = {
  calcAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },

  greet() {
    return "Have a nice day";
  },

  init(name, birthYear, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  },
};

let sujay = Object.create(person);
sujay.name = "Sujay";
sujay.birthYear = 1995;
sujay.gender = "Male";
console.log(sujay);
console.log(sujay.calcAge());

let mary = Object.create(person, {
  name: { value: "Mary" },
  birthYear: { value: 1990 },
  gender: { value: "Female" },
});

console.log(mary);
console.log(mary.calcAge());

let sky = Object.create(person);
sky.init("Sky", 2020, "Male");
console.log(sky);
