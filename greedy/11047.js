//https://www.acmicpc.net/problem/11047
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const [[N, K], ...coins] = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));

let goal = K;
let ans = 0;

for (let idx = 1; idx <= N; idx++) {
  ans += Math.floor(goal / coins[N - idx]);
  goal = goal % coins[N - idx];
}
console.log(ans);
