//? getElementsByClassName("className");

let paraElements = document.getElementsByClassName("para");
console.log(paraElements); // HTMLCollection

console.log(Array.isArray(paraElements)); // false

//! style
// paraElements.style.color = "blue"; //undefined

//! First convert html collection into an array
//? 1. Array.from(htmlcollection);
let newArray = Array.from(paraElements);
console.log(newArray);
console.log(Array.isArray(newArray));

//? By using spread operator (...varName)
let newArray2 = [...paraElements];
console.log(newArray2);
console.log(Array.isArray(newArray2));

//! Now we successfully converted HTMLCollection into an array
//! So you can iterate on the array

newArray.map((ele, index) => {
  ele.style.color = "blue"; // styling of paragraph elements

  if (index == 1) {
    ele.style.backgroundColor = "yellow";
  }
});
