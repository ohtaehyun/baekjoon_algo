//https://www.acmicpc.net/problem/1043
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");
const [N, M] = lines[0].split(" ").map(Number);

const isTrue = Array(N + 1).fill(false);
lines[1].split(" ").forEach((p, idx) => {
  if (idx > 0) isTrue[p] = true;
});

const parties = [];
for (let i = 0; i < M; i++) {
  const [, ...joiner] = lines[i + 2].split(" ").map(Number);
  parties.push(joiner);
}

let changed = true;
while (changed) {
  changed = false;
  for (const joiner of parties) {
    if (joiner.some((v) => isTrue[v])) {
      for (const v of joiner) {
        if (!isTrue[v]) {
          isTrue[v] = true;
          changed = true;
        }
      }
    }
  }
}

let answer = 0;
for (let i = 0; i < M; i++) {
  const [, ...joiner] = lines[i + 2].split(" ").map(Number);

  if (joiner.every((v) => !isTrue[v])) {
    answer++;
  }
}

console.log(answer);
