const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
});





// Types of Streams

// 1. Readable Stream from which data can be read 
// 2. Writable stream to which we can write data
// 3. Duplex streams that are both Readable and Writable
// 4. Transform streams that can modify or tranform the data as it is written and read
// 5. Ex:Reading from a file as readable stream
// 6. Ex:Writing to a file as writable stream
// 7. Ex:Sockets as a duplex stream
// 8. Ex:File compression where you can write compressed data and read
//    de-compressed data to and from a file as a transfrom stream