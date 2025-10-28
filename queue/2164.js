// https://www.acmicpc.net/problem/2164
const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());
// const N = 6;
const nums = Array.from({ length: N }, (_, i) => i + 1);

let idx = 0;
while (idx < nums.length - 1) {
  idx++; // 첫 카드 버리기

  //맨 아래로 옮기기
  nums.push(nums[idx++]);
}

console.log(nums[idx]);
