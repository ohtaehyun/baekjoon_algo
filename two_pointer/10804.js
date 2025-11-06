//https://www.acmicpc.net/problem/10804
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));
const arr = Array.from({ length: 20 }, (v, k) => k + 1);

function swap(a, b) {
  while (a < b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
    a++;
    b--;
  }
}

for (const [a, b] of lines) {
  swap(a - 1, b - 1);
}

console.log(arr.join(" "));
