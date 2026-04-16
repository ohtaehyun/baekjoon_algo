// https://www.acmicpc.net/problem/11399
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const [[N], waiting] = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));
waiting.sort((a, b) => a - b);

let sum = 0;
let wait = 0;
for (let i = 0; i < N; i++) {
  sum += wait + waiting[i];
  wait += waiting[i];
}

console.log(sum);
