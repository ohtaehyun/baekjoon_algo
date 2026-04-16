// https://www.acmicpc.net/problem/15727
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const L = Number(input);

console.log(Math.ceil(L / 5));
