console.log("Filter Method in Javascript");

//! Condition

let numbers = [10, 37, 38, 79, 35, 65, 89, 32, 45, 18, 7, 3, 9, 30];

//? array.filter((cValue, cIndex, cArray) => {retrun })

let filteredNumbers = numbers.filter((cValue, cIndex, cArray) => {
  if (cValue > 20) {
    return cValue;
  }
});

// let filteredNumbers = numbers.filter((cValue, cIndex, cArray) => {
//     return cValue > 20;
//   });

console.log(filteredNumbers);
console.log(numbers);


