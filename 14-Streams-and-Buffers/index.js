const buffer = new Buffer.from("Akram");

buffer.write("Code");
buffer.write("Codevolution");

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());