// https://www.acmicpc.net/problem/17626
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const n = Number(input);
const dp = Array.from({ length: n + 1 }, () => Infinity);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; i - j ** 2 >= 0; j++) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}

console.log(dp[n]);
