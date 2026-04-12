// https://www.acmicpc.net/problem/15686
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");

const [N, M] = lines[0].split(" ").map(Number);
const homes = [];
const chickens = [];

for (let i = 0; i < N; i++) {
  const arr = lines[i + 1].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    if (arr[j] === 1) homes.push([i, j]);
    if (arr[j] === 2) chickens.push([i, j]);
  }
}

console.log(dfs(0, []));

function dfs(idx, selected) {
  if (selected.length === M) return calc(selected);
  if (chickens.length - idx + selected.length < M) return Infinity;

  selected.push(idx);
  const r1 = dfs(idx + 1, selected);
  selected.pop();
  const r2 = dfs(idx + 1, selected);

  return Math.min(r1, r2);
}

function calc(selected) {
  let dist = 0;
  for (const [hx, hy] of homes) {
    let minDist = Infinity;
    for (const ci of selected) {
      const d = Math.abs(hx - chickens[ci][0]) + Math.abs(hy - chickens[ci][1]);
      if (d < minDist) minDist = d;
    }
    dist += minDist;
  }
  return dist;
}
