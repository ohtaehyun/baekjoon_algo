// https://www.acmicpc.net/problem/1629
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [A, B, C] = input.split(" ").map(BigInt);
const dp = new Map();
dp.set(0n, 1n);
dp.set(1n, A % C);
recursive(B);

function recursive(n) {
  if (dp.has(n)) return dp.get(n);

  const a = n / 2n;
  const b = n - a;

  dp.set(n, (recursive(a) * recursive(b)) % C);
  return dp.get(n);
}

console.log(dp.get(B).toString());
