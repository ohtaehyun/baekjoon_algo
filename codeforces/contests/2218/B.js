// https://codeforces.com/contest/2218/problem/B
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");
const answer = [];
for (let i = 1; i < lines.length; i++) {
  const nums = lines[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  answer.push(nums.reduce((sum, n) => sum - n, 2 * nums[0]));
}

console.log(answer.join("\n"));
