// https://www.acmicpc.net/problem/1019
const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf8").toString());

const answer = Array(10).fill(0);

let start = 1;
let end = N;
let factor = 1;

function count(n) {
  if (n === 0) return;
  n.toString()
    .split("")
    .forEach((_) => (answer[_] += factor));
}

while (start <= end) {
  while (end % 10 !== 9 && start <= end) {
    count(end);
    end--;
  }

  while (start % 10 && start <= end) {
    count(start);
    start++;
  }

  if (start <= end) {
    const blockCount = Math.floor(end / 10) + 1;
    answer.forEach((v, i) => (answer[i] += blockCount * factor));
  }

  start = Math.floor(start / 10);
  end = Math.floor(end / 10);
  factor *= 10;
}

console.log(answer.join(" "));
