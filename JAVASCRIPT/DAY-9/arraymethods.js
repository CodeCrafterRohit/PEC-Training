console.log("Array Methods in Javascript");

//! 1 push() => It will add elements from the last.
//? Syntax -> push(ele1, ele2, ele3.....eleN);
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
numbers.push(60, 70);
console.log(numbers);

//! 2. pop() => It will remove the element from the last.
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);

//! 3. shift() => It will remove the element from the starting.
numbers.shift();
console.log(numbers);

//! 4. unshift() => It will add the elments from the starting.
numbers.unshift(100, 90, 80, 70);
console.log(numbers);

//! 5. slice() =>
//? Syntax -> slice(startIndex, endIndex);
// (7) [100, 90, 80, 70, 20, 30, 40]
let slicedElements = numbers.slice(1, 6);
console.log(slicedElements);

//! 6. splice() =>
//? Syntax -> splice(startIndex, deleteCount, addElements);
let names = ["Vijay", "Rajni", "SRK", "Surya", "Ajith"];
console.log(names);

// names.splice(3, 2, "STR", "NTR");
let splicedELements = names.splice(3, 2);
console.log(names);
console.log(splicedELements);

//! 7. concat() =>
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let mergedArray = arr1.concat(arr2);
console.log(mergedArray); //(5) [10, 20, 30, 40, 50]

//! 8. reverse() =>
let arr3 = ["Hello", "World", "Bye", "World"];
let reveredArray = arr3.reverse();
console.log(reveredArray);

//! 9. join() =>
//? Syntax -> join(separator -> symbol (-,@,#,$) )
let arr4 = ["Hello", "World", "Bye", "World"];
console.log(arr4.join("-"));

//! 10. includes() =>
let books = ["Loss of the sprit world", "Silent Man", "Harry Potter", "Time and Management", "PS-1"];
console.log(books.includes("Silent Man")); // true
console.log(books.includes("Demo")); //false

//! 11. indexOf() =>
console.log(books.indexOf("Harry Potter")); //2
console.log(books.indexOf("Demo")); // -1

//! 12. isArray() => It is used to check array or not.
let arr = (1,2,3,4,5);
let newArr = [1,2,3,4,5];
console.log(Array.isArray(arr)); //false
console.log(Array.isArray(newArr)); //true
