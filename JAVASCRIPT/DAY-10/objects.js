console.log("Objects in Javascript");

//! Properties of car
let color = "black";
let model = "A7";
let brand = "Audi";

//! Functionality of the car
function start() {
  console.log("Car has been started...vroom");
}
start();

//! Array
//? let car = [ "black","audi", "a7", 6500000, function () {console.log("Car")}]

//! How to create an object
let car = {
  color: "black",
  brand: "Audi",
  model: "A6",
  fuelType: "Petrol",
  start: () => {
    console.log("Car started");
  },
};
//! Accessing the car object properties
console.log(car);
console.log(car.model);
console.log(car.brand);

//! Employee Object
let employee = {
  eName: "Ajay",
  eId: 101,
  eSalary: 50000,
  eIsMarried: false,
};

console.log(employee);

//! How to access the employee properties
console.log(employee.eName); // Ajay

//! Adding property to the employee object
employee.eAge = 19;

console.log(employee);

//! How to delete property from the employee object
delete employee.eIsMarried;

console.log(employee);

//! human object
let human = {
  name: "John",
  age: 23,
  status: true,
  designation: "Software Engineer",
  "emp salary": 250000, // "emp salary" -> special key
  7: "Thala",
};
console.log(human);

//! How to acces the special keys in object
console.log(human["emp salary"]);
console.log(human[7]);
console.log(human["name"]);

//! Key has a dynamic
//! First create a keyname with string
let keyName = "city";
//! Add that key to the object with bracket notation
//? And provide the value
human[keyName] = "Chennai"; // This key will assign at the runtime
console.log(human);
