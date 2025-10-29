//https://www.acmicpc.net/problem/15652
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const [N, M] = input.split(" ").map((_) => Number(_));

const out = [];
const picked = [];

function backtracking(start) {
  if (picked.length === M) {
    out.push(picked.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    picked.push(i);
    backtracking(i);
    picked.pop();
  }
}
backtracking(1);
console.log(out.join("\n"));
