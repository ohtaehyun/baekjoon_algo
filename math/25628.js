// https://www.acmicpc.net/problem/5430
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [A, B] = input.split(" ").map(Number);

console.log(Math.min(Math.floor(A / 2), B));
