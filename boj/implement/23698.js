// https://www.acmicpc.net/problem/23968
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");
const [N, K] = lines[0].split(" ").map(Number);
const nums = lines[1].split(" ").map(Number);

let cnt = 0;
for (let last = N; last >= 1; last--) {
  for (let i = 0; i <= last - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      cnt++;
      if (cnt === K) {
        console.log([nums[i], nums[i + 1]].sort((a, b) => a - b).join(" "));
        return;
      }
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  }
}

console.log(-1);
