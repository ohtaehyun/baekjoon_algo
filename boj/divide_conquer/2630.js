// https://www.acmicpc.net/problem/2630
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0].trim());
const map = Array.from({ length: N }, (_, i) => input[i + 1].trim().split(/\s+/).map(Number));


let blue = 0;
let white = 0;

function count(row, col, length) {
  let blueCnt = 0;
  let whiteCnt = 0;
  for (let i = row; i < row + length; i++) {
    for(let j = col; j < col + length; j++) {
      if (map[i][j] === 1) blueCnt += 1;
      else whiteCnt += 1;
    }
  }

  if (blueCnt === length ** 2) {
    blue += 1;
    return;
  }

  if (whiteCnt === length ** 2) {
    white += 1;
    return;
  }

  const mid = Math.floor(length / 2);

  count(row, col, mid);
  count(row + mid, col, mid);
  count(row, col + mid, mid);
  count(row + mid, col + mid, mid);
}


count(0, 0, N);

console.log([white, blue].join('\n'));