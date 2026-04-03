// https://www.acmicpc.net/problem/9461

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const lines = input.split("\n").map((_) => Number(_));
const padovans = [1, 1, 1];

for (let i = 1; i < lines.length; i++) {
  console.log(getPadovan(lines[i]));
}

function getPadovan(num) {
  while (num > padovans.length) {
    const l = padovans.length;
    padovans.push(padovans[l - 3] + padovans[l - 2]);
  }

  return padovans[num - 1];
}
