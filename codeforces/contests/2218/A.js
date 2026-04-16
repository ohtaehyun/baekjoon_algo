// https://codeforces.com/contest/2218/problem/A
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");
const answer = [];
for (let i = 1; i < lines.length; i++) {
  const x = Number(lines[i]);
  if (x === 67) {
    answer.push(67);
  } else {
    answer.push(x + 1);
  }
}

console.log(answer.join("\n"));
