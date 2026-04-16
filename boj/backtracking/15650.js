// https://www.acmicpc.net/problem/15650
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [N, M] = input.split(" ").map((_) => Number(_));

const picked = [];
const outs = [];

function backtracking(start) {
  if (picked.length === M) {
    outs.push(picked.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    picked.push(i);
    backtracking(i + 1);
    picked.pop();
  }
}

backtracking(1);
console.log(outs.join("\n"));
