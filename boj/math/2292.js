// https://www.acmicpc.net/problem/2292
const fs = require("fs");
const N = fs.readFileSync(0, "utf8").toString().trim();

let i = 0;

while (3 * i * (i + 1) + 1 < N) {
  i++;
}

console.log(i + 1);
