console.log("Arrow Function in Javascript");

//! Arrow Function -> Fat Arrow Function
//? Syntax - () => {}

//! Creating an arrow function
let arr = () => {
  console.log("This is arrow function");
};

//! Calling arrow function with the help of
//! variable name
arr();

//! Adding two number with the help arrow function
//? If there is only one parameter and one statement
//? there is no need to use () and {}
let addNum = (a) => console.log(a);
addNum(10);

//? If there more than one parameters and
//? and statements then you have to use () and {}
let num = (a, b) => {
  console.log(a + b);
  console.log(a - b);
};
num(10, 20);

//! return keyword inside the arrow function
// ? Implicit Return
let greet = name => name;
console.log(greet("John"));

//? Explicit Return
let greet2 = (name) => {
  console.log("Inside the arrow function");
  return name;
};
console.log(greet2("John"));
