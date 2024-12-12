// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// function greetVishwas(greetFn){
//     const name = "Vishwas";
//     greetFn(name);
// }

// greetVishwas(greet);




function greet(name) {
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback){
    const name = "Vishwas";
    callback(name);
}

higherOrderFunction(greet);




// Synchronous Callbacks

// A callback which is executed immediately is
// called a synchronous callback

// let numbers = [1, 2, 3, 4, 5, 6];
// numbers.sort((a,b) => a-b);
// numbers.filter(n => n % 2 === 0);
// numbers.map(n => n/2);