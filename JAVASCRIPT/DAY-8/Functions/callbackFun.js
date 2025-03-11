console.log("Callback Function in Javascript");

//! Creating a simple function
//? Higher Order Function
function mainFunction(demo) {
  console.log("This is the main function");
  demo();
}

//! Creating one more function -> callback function
function callbackFunction() {
  console.log("This is the callback function");
}

//! Calling the main function
mainFunction(callbackFunction);
