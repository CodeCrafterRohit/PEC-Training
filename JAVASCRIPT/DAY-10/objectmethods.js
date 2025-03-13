console.log("Object Methods");

//! 1. keys() => It will return you the keys of an object 
//! in the form of array.
//? Syntax -> Object.keys()

let obj = {
  name: "John",
  age: 22,
  city: "Chennai",
  skills: ["HTML", "CSS", "JS"]
};

console.log(obj);
console.log(Object.keys(obj));

//! 2. values() => It will return you the values of an object 
//! in the form of array.
//? Syntax -> Object.values()
console.log(Object.values(obj));

//! 3 entries() => It will return you the each key-value
//! pair in the form of array.
console.log(Object.entries(obj));

