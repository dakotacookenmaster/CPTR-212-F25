// console.log("Hello world!")

// const name = "Jon"
// const age = 22

// let changing = 10;

// changing++;

// const person = {
//     name: "Dakota",
//     age: 26,
// }

// console.log(person)

// person.age = 25

// console.log(person)

// // console.log("Hello, my name is " + name + " and my age is " + age);
// console.log(`Hello, my name is ${name} and my age is ${age}.`)

const prompt = require("prompt-sync")({ sigint: true });

let number = prompt("Enter a number, or 'z' to quit: ");

let sum = 0

while(number !== "z") {
    if(number === 12) {
        
    }
    sum += +number // sum = sum + number
    number = prompt("Enter a number, or 'z' to quit: ");
}

console.log(`The sum is ${sum}.`)

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

