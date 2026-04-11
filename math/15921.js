// https://www.acmicpc.net/problem/15921
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");
const N = Number(lines[0]);

if (N === 0) {
  console.log("divide by zero");
  return;
}

const records = lines[1].split(" ").map(Number);
const avg = records.reduce((sum, record) => sum + record, 0) / N;
const exp = records.reduce((sum, record) => sum + record / N, 0);

console.log((avg / exp).toPrecision(3));
