console.log("Rest Parameter");

//? Synatx to create rest parameter
//! ...variableName
function getNumbers(...num) { // ...num ->  Rest parameter
  console.log("Numbers:", num);
}

getNumbers(10, 20, 30, 40, 50); // arguments

//? ...varName
//!  Create one function which will accept names
function getNames (...names) {
    console.log("Names")
    console.log(names)
}
getNames("John", "Bob");



