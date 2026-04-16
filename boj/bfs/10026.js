// https://www.acmicpc.net/problem/10026
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");
const N = Number(lines[0]);
const map = Array.from({ length: N }, () => Array(N));

for (let i = 1; i < lines.length; i++) {
  for (let j = 0; j < N; j++) {
    map[i - 1][j] = lines[i][j];
  }
}

console.log(countSection().join(" "));

function countSection() {
  let cnt = 0;
  let cntRG = 0;
  const isVisit = Array.from({ length: N }, () => Array(N).fill(false));
  const isVisitRG = Array.from({ length: N }, () => Array(N).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!isVisit[i][j]) {
        bfs(false, isVisit, i, j);
        cnt++;
      }

      if (!isVisitRG[i][j]) {
        bfs(true, isVisitRG, i, j);
        cntRG++;
      }
    }
  }
  return [cnt, cntRG];
}

function bfs(isSameRG, isVisit, row, col) {
  isVisit[row][col] = true;

  const queue = [[row, col]];
  let idx = 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (idx < queue.length) {
    const [x, y] = queue[idx];
    const color = map[x][y];

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (0 <= nx && nx < N && 0 <= ny && ny < N && isSameColor(isSameRG, color, map[nx][ny]) && !isVisit[nx][ny]) {
        isVisit[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }

    idx++;
  }
}

function isSameColor(isSameRG, color1, color2) {
  if (isSameRG) {
    return (color1 === "B" && color2 === "B") || (color1 !== "B" && color2 !== "B");
  }

  return color1 === color2;
}
