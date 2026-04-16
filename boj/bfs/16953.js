//https://www.acmicpc.net/problem/16953
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const [A, B] = input.split(" ").map(Number);

const isVisit = new Set();
isVisit.add(A);
let idx = 0;
let queue = [[A, 1]];

let answer = -1;

while (idx < queue.length) {
  const [now, cnt] = queue[idx++];

  for (const next of [now * 2, now * 10 + 1]) {
    if (next === B) {
      answer = cnt + 1;
      break;
    }

    if (next < B) queue.push([next, cnt + 1]);
  }
}

console.log(answer);
