// passing version
let alien_color: string = "green";

if(alien_color === "green"){
    console.log("player just earned 5 point.");
}
// failing version
alien_color = "red";
if(alien_color==="green"){
    console.log("player just earned 5 points.");
}
