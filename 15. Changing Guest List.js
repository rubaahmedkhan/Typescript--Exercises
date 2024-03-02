"use strict";
let guest = ['Fatima', 'Ali', 'Hussain'];
for (var i = 0; i < guest.length; i++) {
    console.log("Dear" + " " + guest[i] + " " + " you are invited to the dinner");
}
;
//changing guest list 
const cannot_attend = guest.splice(1, 1)[0];
const new_guest = "kashaf";
console.log(`${cannot_attend}can't make it to the dinner`);
//add new guest 
guest.push(new_guest);
//print invitation message 
for (let i = 0; i < guest.length; i++) {
    console.log("Dear" + " " + guest[i] + " " + " you are invited to the dinner");
}
;
