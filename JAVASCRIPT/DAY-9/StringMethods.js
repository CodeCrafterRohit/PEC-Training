console.log("String Methods");

//! 1. toUpperCase() =>
let str1 = "hello world";
console.log(str1.toUpperCase()); //HELLO WORLD

//! 2. toLowerCase() =>
let str2 = "HELLO WORLD";
console.log(str2.toLowerCase()); // hello world

//! 3. substring() =>
//? Syntax -> substring(startIndex, endIndex);
let str3 = "Strings in Javascript";
let exractedString = str3.substring(0, 7);
console.log(exractedString); // Strings
let java = str3.substring(11, 15);
console.log(java); // Java

//!4. concat() =>
let str4 = "Hello World ";
let str5 = "Bye World";
let mergedString = str4.concat(str5);
console.log(mergedString);

//! 5. trim() =>
let str6 = "  Welcome to Battle Field  ";
console.log(str6.length);
let removeSpaces = str6.trim();
console.log(removeSpaces.length);

//! 6 split() =>
//? Syntax -> split(separator -> "" , " ", "  ")
let str7 = "The students of battle field is smart and intelligent";
console.log(str7);
let spiltString = str7.split(" ");
console.log(spiltString);

//! 7. charAt() =>
//? Syntax -> charAt(index -> number)
let str8 = "Something is better than nothing";
console.log(str8.charAt(6));

//! 8. includes() =>
//? Syntax -> includes("String") -> boolean value
//~ Boolean -> present -> true; not present -> false
let str9 = "reading book";
let isPresent = str9.includes("read");
console.log(isPresent); // true
let isNotPresent = str9.includes("books");
console.log(isNotPresent);

//! 9. slice() =>
//? Syntax -> slice(startIndex, endIndex);
let str10 = "Panimalar Enginnering College";
let slicedString = str10.slice(10, 21);
console.log(slicedString);

//! 10. replace() =>
//? Syntax -> replace(SearchValue, NewValue);
let str11 = "Hello World! Bye World";
let replaceWorld = str11.replace("World", "Universe");
console.log(replaceWorld);
let replacedAll = str11.replaceAll("World", "Universe");
console.log(replacedAll);


let newStr = "Hello World";
console.log(newStr.slice(-5));//World
console.log(newStr.slice(-5,9));//Wor
