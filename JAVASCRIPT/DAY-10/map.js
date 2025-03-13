console.log("Map method in Javascript");

//! Numbers Array
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

//! map() method
//? array.map((currentValue, currentIndex, currentArray) => {})

let updatedNumbers = numbers.map((cValue, cIndex, cArray) => {
  console.log("Index:", cIndex, "Value:", cValue);
  return cValue + 5;
});

console.log("New Array:", updatedNumbers);
console.log("Original Array:", numbers);

//! 2nd example ->
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareNumbers = numArray.map((cValue) => {
  return cValue * cValue;
});

console.log(squareNumbers); // New Array
console.log(numArray); // Original Array
