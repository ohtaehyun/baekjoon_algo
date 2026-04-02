// https://www.acmicpc.net/problem/1271
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
const [n, m] = input.split(" ").map((_) => BigInt(_));

console.log((n / m).toString());
console.log((n % m).toString());
