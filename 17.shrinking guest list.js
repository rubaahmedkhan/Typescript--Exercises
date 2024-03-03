"use strict";
//guest list 
let guests = ["Fatima", "hussain", "Kashaf"];
//Adding three new guest
guests.unshift("Hira");
guests.splice(Math.floor(guests.length / 2), 0, "Aqsa");
guests.push("Taha");
//print invitation message
for (let i = 0; i < guests.length; i++) {
    console.log("Dear" + " " + guests[i] + " " + " you are invited to the dinner");
}
//shrinking guest list
console.log("Oops! The new dinner table won't arrive in time.");
console.log("I can only invite twopeople for dinner.");
while (guests.length > 2) {
    console.log(`Sorry ${guests.pop()} ,I can't invite you to dinner.`);
}
guests.forEach(guest => console.log(`Dear ${guest} ,you are still invited to dinner.`));
guests.splice(0, guests.length);
console.log(guests);
