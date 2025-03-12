console.log("Arrays in Javascript");

//! How to create an Array?
//? [] -> Array Literals

//? Homogenous Array -> Same type of data or elements
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

let names = ["Jeeva", "Nitish", "Kamlesh", "Arun", "Monesh"];
console.log(names);

//? Heterogenous Array -> Different type of data or elements
let combineArray = [10, "John", true, null, "Bob"];
console.log(combineArray);

//! Accessing array elements
let todolist = [
  "Revision of code",
  "Practice Code",
  "complete the task",
  "Sleeping",
];
console.log(todolist);
console.log(todolist[3]);
console.log(todolist[1]);

//! Updating the array elements
todolist[2] = "Forget the task";
console.log(todolist);

//! remove the elements
todolist[3] = "";
console.log(todolist);

let elementsCount = todolist.length;
console.log(elementsCount); //4
