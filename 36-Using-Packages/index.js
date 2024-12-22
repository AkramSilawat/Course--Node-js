// const localModule = require("./path-to-module");
// const fs = require("node:fs");

// function greet(name){
//     console.log(`Hello ${name}, welcome to Codevolution`);
// }

// module.exports = greet;

// -------------------------------

const upperCase = require("upper-case").upperCase;

function greet(name){
    console.log(upperCase(`Hello ${name}, welcome to Codevolution`));
}

greet("Vishwas");
module.exports = greet;

