/* Every object we create in JavaScript is directly or indirectly 
an instance of object constructor */

let mark = {
  name: "mark",
  birthYear: 1992,
  gender: "male",
};

console.log(mark.hasOwnProperty("name"));

// let mark = new Object(); - Creates an empty object
// mark.name = "mark";
// mark.birthYear = 1992;
// mark.gender = "male";

let arr = [10, 20, 30];
console.log(arr);
arr.push();
