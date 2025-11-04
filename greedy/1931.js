// https://www.acmicpc.net/problem/1931
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
const [[N], ...meetings] = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));

meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let endTime = -Infinity;
let ans = 0;
for (const meeting of meetings) {
  if (endTime <= meeting[0]) {
    endTime = meeting[1];
    ans++;
  }
}
console.log(ans);
