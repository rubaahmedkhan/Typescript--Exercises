interface car  {
    manufacture: string;
    model: string;
    [key: string]: any;
}

function createcar(manufacture: string, model: string, ...args: any[]): car {
   const car: car = {
    manufacture: manufacture, 
    model: model
   };


    for (let i = 0; i< args.length; i+=2){
        const key = args[i];
        const value = args[i + 1];
        car[key] = value
    }
    
    

    return car ;
}
//call the function with required information 
const mycar = createcar("Helix","X-2000","color","black","optionalFeature","sunroof");
console.log(mycar);