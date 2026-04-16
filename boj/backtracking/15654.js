// https://www.acmicpc.net/problem/15654
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [[N, M], nums] = input.split("\n").map((line) => line.trim().split(/\s+/).map(Number));

nums.sort((a, b) => a - b);
const visited = Array.from({ length: N }, () => false);
const picked = [];
const out = [];

function backtracking() {
  if (picked.length === M) {
    out.push(picked.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === false) {
      picked.push(nums[i]);
      visited[i] = true;
      backtracking();
      picked.pop();
      visited[i] = false;
    }
  }
}

backtracking();
console.log(out.join("\n"));
