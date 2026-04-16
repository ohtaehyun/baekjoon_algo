// https://www.acmicpc.net/problem/10103
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
// const input = `4
// 5 6
// 6 6
// 4 3
// 5 2`;
const [count, ...dices] = input.split(/\n/);

let s1 = 100;
let s2 = 100;
for (const [chang, sang] of dices.map((dice) => dice.split(" ").map((_) => Number(_)))) {
  s1 -= chang < sang ? sang : 0;
  s2 -= sang < chang ? chang : 0;
}

console.log(s1, s2);
