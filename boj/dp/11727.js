//https://www.acmicpc.net/problem/11727
const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf-8").toString().trim());
const dp = [1, 3];

for (let i = 2; i < n; i++) {
  dp.push((2 * dp[i - 2] + dp[i - 1]) % 10007);
}

console.log(dp[n - 1]);
