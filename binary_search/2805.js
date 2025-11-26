// https://www.acmicpc.net/problem/2805
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const [[N, M], trees] = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));

let left = 0;
let right = 1_000_000_000;
let answer;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  const sum = trees.reduce((sum, height) => (height - mid > 0 ? sum + height - mid : sum), 0);
  if (sum < M) {
    right = mid - 1;
  } else {
    answer = mid;
    left = mid + 1;
  }
}

console.log(answer);
