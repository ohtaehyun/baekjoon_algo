// https://www.acmicpc.net/problem/9663
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

const N = Number(input);
let answer = 0;

const cols = new Array(N).fill(false);
const diag1 = new Array(2 * N - 1).fill(false);
const diag2 = new Array(2 * N - 1).fill(false);

function dfs(row) {
  if (row === N) {
    answer += 1;
    return;
  }

  for (let col = 0; col < N; col++) {
    const d1 = row + col;
    const d2 = row - col + (N - 1);
    if (cols[col] || diag1[d1] || diag2[d2]) continue;

    cols[col] = true;
    diag1[d1] = true;
    diag2[d2] = true;

    dfs(row + 1);

    cols[col] = false;
    diag1[d1] = false;
    diag2[d2] = false;
  }
}

dfs(0);
console.log(String(answer));