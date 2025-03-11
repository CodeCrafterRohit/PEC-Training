console.log("Looping Statements!!");

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

//! 1. For Loop
// for (inititailization; condition; updation) {

// }

for (let i = 0; i < 5; i++) {
  console.log("Hello World!");
}

// ? Printing 1 to 10 numbers with help for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//! 2. while loop
// while (condition) {
//Statement

//Updatation -> Increment or Decrement
// }

let i = 1;
while (i <= 10) {
  console.log(i);

  i++; // Increment
}

//! 3. do-while loop
// do {
//Statement
// } while (condition);
let j = 1;
do {
  console.log("Hello do-while loop");
  j++;
} while (j <= 5);
