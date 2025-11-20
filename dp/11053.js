// https://www.acmicpc.net/problem/11053
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const [[N], nums] = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));

const dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[j] < nums[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
