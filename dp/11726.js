//https://www.acmicpc.net/problem/11726
const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf-8").toString().trim());
const dp = [1, 2];

for (let i = 2; i < n; i++) {
  dp.push((dp[i - 2] + dp[i - 1]) % 10007);
}

console.log(dp[n - 1]);
