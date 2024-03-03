//test with string
const string1: string = "right";
const string2: string= "way";
console.log(string1 ===string2); //false
console.log(string1!= string2); //true

//test using the lower case function 
const upperCaseString: string = "HELLO";
const lowerCaseString: string ="hello";
console.log(upperCaseString.toLowerCase()===lowerCaseString); //true

//numerical test
const num1: number = 12;
const num2: number = 6;

console.log(num1==num2);   //false
console.log(num1!=num2);    //true
console.log(num1<num2);      //false
console.log(num1>num2);      //true
console.log(num1>=num2);      //true
console.log(num1<=num2);       //false

//test and ,or operator
const condition1: boolean = true;
const condition2: boolean = false;

console.log(condition1 && condition2);   //false
console.log(condition1 || condition2);    // true
console.log(condition1 && condition2);   //false

//test whether an item is in an array
const array: number[] = [1,2,3,4,5,6,7];
const itemToCheck: number = 4 ;
console.log(array.includes(itemToCheck));  //true

//test whether an item is not in an array
const itemNotInArray: number = 10;
console.log(!array.includes(itemNotInArray));  //true

