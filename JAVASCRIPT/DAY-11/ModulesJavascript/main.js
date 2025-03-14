import addNum from "./module1.js"; // default export
import { data } from "./module1.js"; //named export
import { data2 } from "./module1.js"; //named export

console.log("Main File");

addNum(10, 20);
console.log(data);
console.log(data2);
