//https://www.acmicpc.net/problem/12865
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const [[N, K], ...items] = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));

const dp = Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [weight, value] = items[i];

  for (let w = K; w >= weight; w--) {
    dp[w] = Math.max(dp[w], dp[w - weight] + value);
  }
}

console.log(dp[K]);
