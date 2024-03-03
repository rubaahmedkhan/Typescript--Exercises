// function to show magicians names
function show_magisions(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    })
}
// define array
let magicians: string[] = ["Shin Lim", "Jeff MCBride","Penn","Teller"];
show_magisions(magicians);

//function to modify magician names to include "the great"
function make_great(magician: string[]): string[] {
return magician.map(magician => `The Great ${magician}`);
}

//Modify the array to include "the great"
magicians = make_great(magicians);

//show modified magicians names
console.log("\nGreat Magicians:");
show_magisions(magicians);