console.log("Anonymous Function in Javascript");

//! Anonymous Function

//? First Way: Storing inside the variable and call that variable
//! Function as an experssion
let fun = function () {
  console.log("This is an anonymous function");
};

//! call the function with the help of variable name
fun();

//? Second Way: with the help of () and call immediately
(function () {
  console.log("Another anonymous function");
})();

(function (a, b) {
  console.log("Addition of two numbers");
  console.log(a + b);
})(10, 20);
