// https://codeforces.com/contest/2218/problem/C
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n").map(Number);

const answer = [];
for (let i = 1; i < lines.length; i++) {
  const n = Number(lines[i]);
  let left = 1;
  let right = 3 * n;
  const arr = [];
  while (left < right) {
    arr.push(left++);
    arr.push(right--);
    arr.push(right--);
  }
  answer.push(arr.join(" "));
}

console.log(answer.join("\n"));
