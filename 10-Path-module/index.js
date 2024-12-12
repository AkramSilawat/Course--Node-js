// const path = require("node:path");
const path = require("path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.josn"));
   
// console.log(path.join("foler1", "foler2", "index.html"));
// console.log(path.join("/foler1", "foler2", "index.html"));
// console.log(path.join("/foler1", "//foler2", "index.html"));
// console.log(path.join("/foler1", "//foler2", "..index.html"));
// console.log(path.join(__dirname, "data.josn"));


console.log(path.resolve("foler1", "foler2", "index.html"));
console.log(path.resolve("/foler1", "foler2", "index.html"));
console.log(path.resolve("/foler1", "//foler2", "index.html"));
console.log(path.resolve("/foler1", "//foler2", "../index.html"));
console.log(path.resolve(__dirname, "data.josn"));
