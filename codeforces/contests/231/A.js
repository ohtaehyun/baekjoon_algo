// https://codeforces.com/problemset/problem/231/A
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");

let answer = 0;
for (let i = 1; i < lines.length; i++) {
  const [a, b, c] = lines[i].split(" ").map(Number);
  if (a + b + c >= 2) {
    answer++;
  }
}
console.log(answer);
