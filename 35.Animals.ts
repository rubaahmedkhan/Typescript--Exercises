// define list of animals
let animals:string[] = ["Dog","Horse","Rabbit"];

//print the name of each animal using a for loop
for (let animal of animals) {
    console.log(animal);
};

//print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
};

//print what these animals have in common
console.log("Any of these animals would make a great pet!");