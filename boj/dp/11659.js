// https://www.acmicpc.net/problem/11659
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [[N, M], nums, ...cases] = input.split("\n").map((_) => _.split(" ").map((__) => Number(__)));
const dp = [0];

for (let i = 0; i < N; i++) {
  dp.push((dp[i] ?? 0) + nums[i]);
}

const ans = [];

for (const [s, e] of cases) {
  ans.push(dp[e] - dp[s - 1]);
}
console.log(ans.join("\n"));
