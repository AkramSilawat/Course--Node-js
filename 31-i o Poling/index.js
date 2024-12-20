const fs = require("fs");

fs.readFile(__filename, () => {
    console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => console.log("this is setTimeout 1"));

for(let i = 0; i < 2000000000; i++){}




// I/O Queue
// Expriment 9 Inference
// I/O Events are polled and callback function are added to the I/O queue only after the I/O is complete
