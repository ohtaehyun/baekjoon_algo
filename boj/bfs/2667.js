// https://www.acmicpc.net/problem/2667
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");
const N = Number(lines[0]);

const isVisit = Array.from({ length: N }, () => Array(N).fill(false));
const answer = [];

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (isVisit[i][j]) continue;
    isVisit[i][j] = true;

    if (lines[i + 1][j] === "1") answer.push(bfs(i, j));
  }
}

function bfs(r, c) {
  let cnt = 1;
  const queue = [[r, c]];
  let idx = 0;
  while (idx < queue.length) {
    const [x, y] = queue[idx];

    for (const [dx, dy] of directions) {
      const [nx, ny] = [x + dx, y + dy];
      if (0 <= nx && nx < N && 0 <= ny && ny < N && !isVisit[nx][ny] && lines[nx + 1][ny] === "1") {
        isVisit[nx][ny] = true;
        queue.push([nx, ny]);
        cnt++;
      }
    }
    idx++;
  }
  return cnt;
}

console.log([answer.length, ...answer.sort((a, b) => a - b)].join("\n"));
