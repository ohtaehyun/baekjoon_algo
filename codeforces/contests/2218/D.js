// https://codeforces.com/contest/2218/problem/D
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n").map(Number);

const answer = [];
for (let i = 1; i < lines.length; i++) {
  const n = lines[i];
  const arr = [];

  /**
   * 핵심 아이디어 => 짝수의 최대공약수는 2가 될 수 있으므로 arr의 각 요소들을 홀수들의 곱으로 구현
   * arr[0] = 1 * 3
   * arr[1] = 3 * 5
   * arr[2] = 5 * 7
   * ...
   * arr[n] = (2n + 1) * (2n + 3);
   */
  for (let j = 0; j < n; j++) {
    arr.push((2 * j + 1) * (2 * j + 3));
  }

  answer.push(arr.join(" "));
}

console.log(answer.join("\n"));
