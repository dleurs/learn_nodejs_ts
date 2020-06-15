let list: Array<number> = [1, 2, 3,8,9];

list.pop();

list.push(10);

list.map((value: number) => {
    console.log(value);
})

let firstName: Array<string> = ["Dimitri", "Pauline"];
// The spead operator ...
let copyFirstName: Array<string> = [...firstName];
console.log(firstName);
console.log(copyFirstName);

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4));


let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

enum Color {Red, Green, Blue}
let red: Color = Color.Red;