// https://www.acmicpc.net/problem/11660
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");
const [N, M] = lines[0].split(" ").map(Number);

const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const nums = lines[i].split(" ").map(Number);
  for (let j = 1; j <= N; j++) {
    dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + nums[j - 1] - dp[i - 1][j - 1];
  }
}

const answer = [];

for (let i = N + 1; i < lines.length; i++) {
  const [x1, y1, x2, y2] = lines[i].split(" ").map(Number);
  answer.push(dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1]);
}

console.log(answer.join("\n"));
