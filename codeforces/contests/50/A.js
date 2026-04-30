//https://codeforces.com/problemset/problem/50/A
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [M, N] = input.split(" ").map(Number);
console.log(Math.floor((M * N) / 2));
