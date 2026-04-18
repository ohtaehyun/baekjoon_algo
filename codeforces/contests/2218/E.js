// https://codeforces.com/contest/2218/problem/E
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
/**
 * a b c
 * (b ^ a) ^ (c ^ a)
 *
 * 0 1 a
 * 1 0 b
 * 1 1 c
 *
 * a ^ b = 1 1
 * a ^ c = 1 0
 * (a ^ b) ^ (a ^ c) = (a ^ a) ^ (b ^ c) = 0 ^ (b ^ c) = (b ^ c)
 *
 *
 * xor의 항등원이 0이고 자기 자신을 xor하면 항상 0
 * 따라서 문제는 최초 배열에서 숫자 2개를 골라서 xor의 최대값을 구하는 문제
 */
const lines = input.split("\n");
const answer = [];

for (let i = 2; i < lines.length; i += 2) {
  const a = lines[i].split(" ").map(Number);
  answer.push(findMax(a));
}

console.log(answer.join("\n"));

function findMax(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const m = arr[i] ^ arr[j];
      if (m > max) max = m;
    }
  }

  return max;
}
