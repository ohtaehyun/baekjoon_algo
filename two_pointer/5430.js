// https://www.acmicpc.net/problem/5430
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");
const N = Number(lines[0]);
const answer = [];

for (let i = 0; i < N; i++) {
  const commands = lines[i * 3 + 1].split("");
  const n = Number(lines[i * 3 + 2]);
  const raw = lines[i * 3 + 3];
  const arr =
    n === 0
      ? []
      : raw
          .slice(1, raw.length - 1)
          .split(",")
          .map(Number);

  let left = 0;
  let right = arr.length - 1;
  let isReverse = false;
  let isError = false;

  for (const cmd of commands) {
    if (cmd === "R") {
      isReverse = !isReverse;
    } else if (cmd === "D") {
      if (right < left) {
        isError = true;
        break;
      }
      if (isReverse) {
        right--;
      } else {
        left++;
      }
    } else {
      isError = true;
      break;
    }
  }

  if (isError) {
    answer.push("error");
  } else {
    let str = "[";
    for (let idx = 0; idx <= right - left; idx++) {
      str += arr[isReverse ? right - idx : left + idx];
      if (idx < right - left) str += ",";
    }
    str += "]";
    answer.push(str);
  }
}

console.log(answer.join("\n"));
