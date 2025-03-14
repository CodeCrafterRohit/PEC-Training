//? 1. JSON.parse(string) =>
//! JSON String
let jsonString = '{"name":"john", "age":20}';
console.log(jsonString);

//! JSON string convert it into the JS Object
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

//? 2. JSON.stringify(object) =>
let employee = {
  empName: "John",
  empId: 101,
  eSalary: 500000,
};
console.log(employee);

//! JS object converting it into the JSON string
let jsonstr = JSON.stringify(employee);
console.log(jsonstr);
