console.log("Functions in Javascript");

//! How to create function in javascript

// function functionName () {
//statements
// }

//? Function Declaration
function greet() {
  console.log("How are you?");
}

//! Calling the function
greet(); // Function call statement
greet();
greet();

//! Parameter and argument in function
function welcome(name) {
  // name is parameter
  console.log(name);
  console.log(name, "Welcome to Web Technology");
}

welcome("John"); // Here john is an argument

// Task
function calculate(a, b) {
  console.log("Addition = ", a + b);
  console.log("Substarction = ", a - b);
  console.log("Multiplication = ", a * b);
}

calculate(10, 20);
console.log(calculate)
