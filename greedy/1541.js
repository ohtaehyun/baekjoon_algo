// https://www.acmicpc.net/problem/1541
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const sumList = input.split("-").map((expression) => expression.split("+").reduce((sum, n) => sum + Number(n), 0));

console.log(sumList.reduce((min, sum) => min - sum, sumList[0] * 2));
