// https://www.acmicpc.net/problem/21736
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");
const [N, M] = lines[0].split(" ").map(Number);
const isVisit = Array.from({ length: N }, () => Array(M).fill(false));
let sx, sy;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (lines[i + 1][j] === "I") {
      sx = i;
      sy = j;
      break;
    }
  }

  if (sx && sy) break;
}

const queue = [[sx, sy]];
isVisit[sx][sy] = true;
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let idx = 0;
let answer = 0;

while (idx < queue.length) {
  const [x, y] = queue[idx];

  if (lines[x + 1][y] === "P") answer++;

  for (const [dx, dy] of directions) {
    const [nx, ny] = [x + dx, y + dy];
    if (0 <= nx && nx < N && 0 <= ny && ny <= M && isVisit[nx][ny] === false && lines[nx + 1][ny] !== "X") {
      isVisit[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }

  idx++;
}

console.log(answer > 0 ? answer : "TT");
