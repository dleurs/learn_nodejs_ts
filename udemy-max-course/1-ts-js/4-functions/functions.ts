function power(nb: number, exposant: number = 3): number {
    return nb**exposant;
}
console.log("power");
console.log(power(5));//125


interface powerArgs {
    nb: number;
    exposant?: number;
}

function powerNamed({nb, exposant = 3}: powerArgs): number { // Distructuring
    return nb**exposant;
}
console.log("powerNamed");
console.log(powerNamed({nb: 5})); //125

function powerNamed2(args: { nb: number, exposant: number}):number {
    return args.nb**args.exposant;
}
console.log("powerNamed2");
console.log(powerNamed2({nb: 5, exposant: 3}));//125

interface PersonArgs {
    name: string;
    age: number;
    hasHobbies: boolean;
}

function add(a: number, b: number): number {
    return a + b;
}

function operation(x: number, y: number, myFunc: (args: { x: number, y: number }) => number): number { 
    return myFunc({x,y});
 };


