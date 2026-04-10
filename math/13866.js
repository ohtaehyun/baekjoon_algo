//https://www.acmicpc.net/problem/13866
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [A, B, C, D] = input.split(" ").map(Number);

console.log(Math.min(Math.abs(A + C - B - D), Math.abs(A + D - B - C)));
