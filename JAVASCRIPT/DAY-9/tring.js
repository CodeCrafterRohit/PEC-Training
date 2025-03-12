console.log("String in Javascript");

//! 1st way to create string -> Double Quotes
let str = "Hello World!";
console.log(str);

//! 2nd Way to create string -> Single Quotes
let str2 = "Bye World!";
console.log(str2);

//! 3rd way to create string -> Template Literals (Backticks)
// Backticks -> ``

function getName(name) {
  console.log(`My name is ${name}`);
}

getName("John");

let name = `John`;
console.log(name);

//! Multiline strings
let multilineString = `This is single line
This is second line
This is third line`;
console.log(multilineString);

//! Immutable in Nature
let newStr = "Old String";
console.log(newStr);

newStr = "New String";
console.log(newStr);
