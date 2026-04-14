// https://www.acmicpc.net/problem/17070
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");
const N = Number(lines.shift());
const home = lines.map((line) => line.split(" ").map(Number));

// 각 방향별 right 이동 델타: 가로[0,1], 대각선[1,1], 세로[1,0]
const DR = [0, 1, 1];
const DC = [1, 1, 0];

// 현재 form에서 갈 수 있는 다음 form
const NEXT = [
  [0, 1],
  [0, 1, 2],
  [1, 2],
];

const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => [0, 0, 0]));
dp[0][1][0] = 1;

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    for (let form = 0; form < 3; form++) {
      if (dp[r][c][form] === 0) continue;
      for (const nf of NEXT[form]) {
        const nr = r + DR[nf];
        const nc = c + DC[nf];
        if (nr >= N || nc >= N) continue;
        if (home[nr][nc] === 1) continue;
        if (nf === 1 && (home[r + 1][c] === 1 || home[r][c + 1] === 1)) continue;
        dp[nr][nc][nf] += dp[r][c][form];
      }
    }
  }
}

const [h, d, v] = dp[N - 1][N - 1];
console.log(h + d + v);
