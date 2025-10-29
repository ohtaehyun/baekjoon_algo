// https://www.acmicpc.net/problem/10409
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

const [meta, jobs] = input.split("\n").map((line) => line.split(/\s+/).map((_) => Number(_)));
const [jobCount, time] = meta;
let workingTime = 0;
let i = 0;
while (i < jobCount) {
  if (workingTime + jobs[i] > time) break;
  workingTime += jobs[i++];
}

console.log(i);
