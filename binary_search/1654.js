// https://www.acmicpc.net/problem/1654

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [kn, ...wires] = input.split("\n");
const [K, N] = kn.split(" ").map((_) => Number(_));

let left = 1;
let right = Math.max(...wires);
let answer;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const cnt = wires.reduce((sum, wire) => sum + Math.floor(wire / mid), 0);
  if (cnt < N) {
    right = mid - 1;
  } else {
    answer = mid;
    left = mid + 1;
  }
}

console.log(answer);
