// https://www.acmicpc.net/problem/15829
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [, str] = input.split("\n");

console.log(
  str
    .split("")
    .reduce(
      (sum, char, idx) => (sum + BigInt(char.charCodeAt() - "a".charCodeAt() + 1) * 31n ** BigInt(idx)) % 1234567891n,
      0n
    )
    .toString()
);
