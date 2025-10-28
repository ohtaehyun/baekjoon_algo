// https://www.acmicpc.net/problem/2744
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

let answer = "";
for (const char of input) {
  answer += /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
}

console.log(answer);
