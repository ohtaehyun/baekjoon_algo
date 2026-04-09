// https://www.acmicpc.net/problem/1194
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");
const [N, M] = lines.shift().split(" ").map(Number);
let sx, sy;

for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < M; j++) {
    if (lines[i][j] === "0") {
      [sx, sy] = [i, j];
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => new Uint8Array(64)));
visited[sx][sy][0] = 1;

const queue = [[sx, sy, 0, 0]];
let idx = 0;
let answer = -1;

while (idx < queue.length) {
  const [x, y, keys, dist] = queue[idx++];

  for (let d = 0; d < 4; d++) {
    const nx = x + dx[d];
    const ny = y + dy[d];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    const block = lines[nx][ny];
    if (block === "#") continue;

    let nkeys = keys;

    if ("A" <= block && block <= "F") {
      if (!(keys & (1 << (block.charCodeAt() - "A".charCodeAt())))) continue;
    } else if ("a" <= block && block <= "f") {
      nkeys = keys | (1 << (block.charCodeAt(0) - "a".charCodeAt()));
    }

    if (block === "1") {
      answer = dist + 1;
      break;
    }

    if (visited[nx][ny][nkeys]) continue;
    visited[nx][ny][nkeys] = 1;
    queue.push([nx, ny, nkeys, dist + 1]);
  }

  if (answer !== -1) break;
}

console.log(answer);
