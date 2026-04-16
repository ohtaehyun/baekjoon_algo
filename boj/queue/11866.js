// https://www.acmicpc.net/problem/11866
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const [N, K] = input.split(" ").map((_) => Number(_));
const queue = Array.from({ length: N }, (v, k) => k + 1);

let idx = 0;

const arr = [];

while (idx < queue.length) {
  if (idx % K !== K - 1) {
    queue.push(queue[idx]);
  } else {
    arr.push(queue[idx]);
  }
  idx++;
}

console.log("<" + arr.join(", ") + ">");
