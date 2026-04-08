// https://www.acmicpc.net/problem/5525
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");
const N = Number(lines[0]);
const S = lines[2];

let answer = 0;
let idx = 0;
while (idx < S.length) {
  if (S[idx] === "I") {
    let cnt = 0;
    while (idx + 2 < S.length) {
      if (S[idx + 1] === "O" && S[idx + 2] === "I") {
        cnt++;
        idx += 2;
      } else {
        break;
      }
    }

    if (cnt >= N) answer += cnt - N + 1;
  }
  idx++;
}

console.log(answer);
