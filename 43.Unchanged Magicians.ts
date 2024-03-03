//exercise #41
// function to show magicians names
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    })
}
// define array
const magicians: string[] = ["Shin Lim", "Jeff MCBride","Penn","Teller"];
show_magicians(magicians);

//exercise 43

function make_great_copy(magicians: string[]): string[]{
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great"+" " + magician);
    }
    return greatMagicians;
}

let unchangedMagicians = [...magicians];
let unchangedMagiciansWithGreat = make_great_copy(unchangedMagicians);

show_magicians(unchangedMagicians);
show_magicians(unchangedMagiciansWithGreat);