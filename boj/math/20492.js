const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const N = Number(input);
console.log(Math.floor(0.78 * N), Math.floor(0.956 * N));
