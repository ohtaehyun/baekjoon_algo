// https://www.acmicpc.net/problem/18870
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString();
const [[N], arr] = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));

const set = new Set(arr);
const counter = Array.from(set)
  .sort((a, b) => a - b)
  .reduce((memo, num, idx) => {
    memo[num.toString()] = idx;
    return memo;
  }, {});

console.log(arr.map((n) => counter[n.toString()]).join(" "));
