// https://www.acmicpc.net/problem/1978
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
const [, nums] = input.split("\n").map((l) => l.split(/\s+/).map((_) => Number(_)));

const max = Math.max(1, ...nums);
const isPrime = Array(max + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let p = 2; p * p <= max; p++) {
  if (!isPrime[p]) continue;
  for (let x = p * p; x <= max; x += p) isPrime[x] = false;
}

let cnt = 0;
for (const v of nums) if (isPrime[v]) cnt++;
console.log(cnt);
