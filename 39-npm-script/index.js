
const upperCase = require("upper-case").upperCase;

function greet(name){
    console.log(upperCase(`Hello ${name}, welcome to Codevolution`));
}

greet("Vishwas");
module.exports = greet;


// Not Run Code