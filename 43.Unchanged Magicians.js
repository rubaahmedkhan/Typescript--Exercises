"use strict";
// function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// define array
const magicians = ["Shin Lim", "Jeff MCBride", "Penn", "Teller"];
show_magicians(magicians);
function make_great_copy(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great" + " " + magician);
    }
    return greatMagicians;
}
let unchangedMagicians = [...magicians];
let unchangedMagiciansWithGreat = make_great_copy(unchangedMagicians);
show_magicians(unchangedMagicians);
show_magicians(unchangedMagiciansWithGreat);
