// const path = require("node:path");
const path = require("path");

// console.log(__filename); // C:\Users\Desktop\JavaScript\Course--Node-js\10-Path-module\index.js
// console.log(__dirname); // C:\Users\Desktop\JavaScript\Course--Node-js\10-Path-module

// console.log("--")

// console.log(path.basename(__filename));// index.js
// console.log(path.basename(__dirname)); // 10-Path-module

// console.log("--")

// console.log(path.extname(__filename)); // .js
// console.log(path.extname(__dirname));  //  

// console.log("--")

// console.log(path.parse(__filename));
/*{
    root: 'C:\\',
    dir: 'C:\\Users\\amans\\OneDrive\\Desktop\\JavaScript\\Course--Node-js\\10-Path-module',
    base: 'index.js',
    ext: '.js',
    name: 'index'
  } */
// console.log(path.format(path.parse(__filename))); // // C:\Users\Desktop\JavaScript\Course--Node-js\10-Path-module\index.js

// console.log("--")

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.josn"));

// console.log("--")

   
console.log(path.join("foler1", "foler2", "index.html"));
console.log(path.join("/foler1", "foler2", "index.html"));
console.log(path.join("/foler1", "//foler2", "index.html")); // \foler1\foler2\index.html
console.log(path.join("/foler1", "//foler2", "..index.html"));
console.log(path.join(__dirname, "data.josn"));

console.log("--")

console.log(path.resolve("foler1", "foler2", "index.html"));
console.log(path.resolve("/foler1", "foler2", "index.html"));
console.log(path.resolve("/foler1", "//foler2", "index.html")); // C:\foler2\index.html
console.log(path.resolve("/foler1", "//foler2", "../index.html"));
console.log(path.resolve(__dirname, "data.josn"));
