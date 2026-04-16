// https://www.acmicpc.net/problem/1874
const fs = require("fs");
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(/\s+/)
  .map((_) => Number(_));

const [N, ...nums] = input;

function solution(N, nums) {
  const stack = [];
  let next = 1;
  const answers = [];

  for (const num of nums) {
    while (next <= N && next <= num) {
      stack.push(next++);
      answers.push("+");
    }

    if (stack[stack.length - 1] !== num) {
      console.log("NO");
      return;
    }

    stack.pop();
    answers.push("-");
  }

  console.log(answers.join("\n"));
}

solution(N, nums);
