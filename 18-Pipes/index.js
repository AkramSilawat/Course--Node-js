const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./file.txt.gz"));

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writeableStream);