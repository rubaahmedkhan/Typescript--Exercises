let places: string[] = ["China","japan","India","Europe","landon"];

// print original order
console.log("Original order:", places);

//print alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...places].sort());

//show original order
console.log("Original order:", places);

//print reverse alphabetical order without changing the original
console.log("Reverse alphabetical order:",[...places].sort().reverse());

//show original order
console.log("Original order:", places);

//Reverse the order of list
places.reverse();
console.log("Reversed order:", places);
//Return to original order
console.log(places.join(", "));

//Sort array in alphabetical order
console.log(places.slice().sort().join(", "));

//Sort array in reverse alphabetical order
console.log(places.slice().sort().reverse().join(", "));