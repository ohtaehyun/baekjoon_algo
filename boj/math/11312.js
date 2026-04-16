// https://www.acmicpc.net/problem/11312
const fs = require("fs");
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((v, idx) => (idx === 0 ? Number(v) : v.split(/\s+/).map((_) => BigInt(_))));

const [count, ...cases] = input;

function solution(A, B) {
  const shares = A / B;
  return shares ** 2n;
}

for (const [A, B] of cases) {
  console.log(solution(A, B).toString());
}
