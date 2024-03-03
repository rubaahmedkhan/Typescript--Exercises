"use strict";
//test with string
const string1 = "right";
const string2 = "way";
console.log(string1 === string2); //false
console.log(string1 != string2); //true
//test using the lower case function 
const upperCaseString = "HELLO";
const lowerCaseString = "hello";
console.log(upperCaseString.toLowerCase() === lowerCaseString); //true
//numerical test
const num1 = 12;
const num2 = 6;
console.log(num1 == num2); //false
console.log(num1 != num2); //true
console.log(num1 < num2); //false
console.log(num1 > num2); //true
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false
//test and ,or operator
const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2); //false
console.log(condition1 || condition2); // true
console.log(condition1 && condition2); //false
//test whether an item is in an array
const array = [1, 2, 3, 4, 5, 6, 7];
const itemToCheck = 4;
console.log(array.includes(itemToCheck)); //true
//test whether an item is not in an array
const itemNotInArray = 10;
console.log(!array.includes(itemNotInArray)); //true
