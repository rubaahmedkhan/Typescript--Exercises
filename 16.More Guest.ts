let guest = ['Fatima', 'Ali', 'Hussain'];
for (let i = 0; i < guest.length; i++) {
    //console.log("Dear" + " " + guest[i] + " " + " you are invited to the dinner");
}
;
//changing guest list 
let cannot_attend = guest.splice(1, 1)[0];
let new_guest = "kashaf";
//console.log("".concat(cannot_attend, "can't make it to the dinner"));
//add new guest 
guest.push(new_guest);
//print invitation message 
for (let i = 0; i < guest.length; i++) {
   // console.log("Dear" + " " + guest[i] + " " + " you are invited to the dinner");
};
console.log("We found a bigger dinner table.");

//Adding three new guest
guest.unshift("Hira");
guest.splice(Math.floor(guest.length / 2), 0, "Aqsa");
guest.push("Taha");

//print invitation message
for (let i = 0; i < guest.length; i++) {
    console.log("Dear" + " " + guest[i] + " " + " you are invited to the dinner");
};
