// define shirt interface
interface shirt{
    size: string;
    message: string;
}

 //define tha make shirt function
 function make_shirt(size: string ="large",message:string ="I love typescript"): shirt {
    return {size, message};
 }

// create a large shirt with the default message
 const largeShirt = make_shirt();
 console.log(largeShirt);
 
// create a medium shirt with the default message
const mediumCase= make_shirt("medium");
console.log(mediumCase);

// create a custom size shirt with a different message
const customShirt= make_shirt("small","Typescript is awesome!");
console.log(customShirt);




