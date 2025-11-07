//https://www.acmicpc.net/problem/14940
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString();

const [[n, m], ...table] = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));
const answer = Array.from({ length: n }, () => Array(m).fill(-1));
let sr, sc;
for (let r = 0; r < n; r++) {
  for (let c = 0; c < m; c++) {
    if (table[r][c] === 2) {
      sr = r;
      sc = c;
      answer[r][c] = 0;
    } else if (table[r][c] === 0) {
      answer[r][c] = 0;
    }
  }
}

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let idx = 0;
const queue = [[sr, sc]];
while (idx < queue.length) {
  const [r, c] = queue[idx];

  for (const [dr, dc] of directions) {
    const [nr, nc] = [r + dr, c + dc];
    if (0 <= nr && nr < n && 0 <= nc && nc < m && table[nr][nc] === 1) {
      if (answer[nr][nc] === -1) {
        answer[nr][nc] = answer[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }
  idx++;
}

console.log(answer.map((row) => row.join(" ")).join("\n"));
