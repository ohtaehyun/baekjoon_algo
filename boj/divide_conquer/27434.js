// https://www.acmicpc.net/problem/27434
const fs = require("fs");
const n = BigInt(fs.readFileSync(0, "utf-8").toString().trim());

function factorial(from, to) {
  if (from < to) {
    const mid = (from + to) / 2n;
    return factorial(from, mid) * factorial(mid + 1n, to);
  } else {
    return from;
  }
}

const ans = factorial(1n, n);
console.log(ans.toString());
