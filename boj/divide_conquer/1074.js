// https://www.acmicpc.net/problem/1074

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function findCount(N, r, c, count) {
  if (N === 0) {
    return count;
  }

  //다음 사분면 결정
  let nextSquare = 0;
  let half = 2 ** (N - 1);

  if (half <= r) {
    nextSquare += 2;
    r -= half;
  }

  if (half <= c) {
    nextSquare++;
    c -= half;
  }

  return findCount(N - 1, r, c, count + nextSquare * half ** 2);
}

console.log(findCount(...input.trim().split(" ").map(Number), 0));
