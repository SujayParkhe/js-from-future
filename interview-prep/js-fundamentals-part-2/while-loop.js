// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i} 🏋️`);
// }

let i = 1;
while (i <= 10) {
  console.log(`Lifting weights repetition ${i} 🏋️`);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop breaks!!");
}
