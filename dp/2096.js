//https://www.acmicpc.net/problem/2096
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");

const N = Number(lines[0]);
let minDp = lines[1].split(" ").map(Number);
let maxDp = lines[1].split(" ").map(Number);

for (let i = 2; i <= N; i++) {
  const [a, b, c] = lines[i].split(" ").map(Number);
  minDp = [
    Math.min(minDp[0], minDp[1]) + a,
    Math.min(minDp[0], minDp[1], minDp[2]) + b,
    Math.min(minDp[1], minDp[2]) + c,
  ];
  maxDp = [
    Math.max(maxDp[0], maxDp[1]) + a,
    Math.max(maxDp[0], maxDp[1], maxDp[2]) + b,
    Math.max(maxDp[1], maxDp[2]) + c,
  ];
}

console.log(Math.max(...maxDp), Math.min(...minDp));
