"use strict";
function createcar(manufacture, model, ...args) {
    const car = {
        manufacture: manufacture,
        model: model
    };
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        car[key] = value;
    }
    return car;
}
//call the function with required information 
const mycar = createcar("Helix", "X-2000", "color", "black", "optionalFeature", "sunroof");
console.log(mycar);
