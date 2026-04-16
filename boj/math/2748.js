// https://www.acmicpc.net/problem/2748
const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf-8").toString().trim());

function fibonacciBigInt(n) {
  if (n === 0) return 0n;
  if (n === 1) return 1n;

  let a = 0n,
    b = 1n;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibonacciBigInt(n).toString());
