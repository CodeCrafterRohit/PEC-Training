//! Array
let arr1 = [];
console.log("Array1:", arr1);
const arr2 = [60, 70, 80, 90, 100];
console.log("Array2:", arr2);

//! Spread Opertaor ->
//? Syntax -> ...varName
arr1 = [10, 20, 30, 40, 50, ...arr2]; //! ...arr2 -> Spread Operator
console.log(arr1);

//! Object (Spread Operator)
let obj1 = {
  name: "John",
  age: 20,
};
console.log(obj1);

//! Here ...obj1 -> Spread Operator
let obj2 = { ...obj1, city: "London", address: "Main Street, HN-2" };
console.log(obj2);
