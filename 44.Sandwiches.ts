function sandwich(...items: string[]): void{
    console.log("sandwich order:")
    for (let i = 0; i <items.length; i++) {
        console.log(`-${items[i]}`)
    }
}
console.log("Enjoy your sandwich");
sandwich("chiken", "mayo");
sandwich("chiken", "chilli sauce");
sandwich("beef","cheese");