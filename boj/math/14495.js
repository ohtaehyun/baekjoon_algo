// https://www.acmicpc.net/problem/14495
const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf8").toString().trim());

function SimilarFibonacci(n) {
  if (n < 4) return 1n;
  let a = 1n;
  let b = 1n;
  let c = 1n;

  for (let i = 4; i <= n; i++) {
    let d = a + c;
    a = b;
    b = c;
    c = d;
  }

  return c;
}

console.log(SimilarFibonacci(n).toString());
