// https://www.acmicpc.net/problem/33845
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");

const sanjinee = lines[0];
const str = lines[1];

const used = {};

for (const c of sanjinee) {
  used[c] = true;
}

let answer = "";
for (const c of str) {
  if (!used[c]) answer += c;
}
console.log(answer);
