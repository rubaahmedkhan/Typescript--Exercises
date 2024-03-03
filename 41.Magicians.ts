// function to show magicians names
function show_magisions(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    })
}
// define array
const magicians: string[] = ["Shin Lim", "Jeff MCBride","Penn","Teller"];
show_magisions(magicians);