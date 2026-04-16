const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
// const input = `11 896
// 334 396
// 326 789
// 1701`;
const [[hp], ...skills] = input
  .split("\n")
  .map((line) => line.split(/\s+/).map((_) => Number(_)))
  .reverse();

let left = 0;
let right = 5000;
let answer;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const totalDamage = skills.reduce((sum, [cool, deal]) => sum + (Math.floor(mid / cool) + 1) * deal, 0);

  if (hp <= totalDamage) {
    right = mid - 1;
    answer = mid;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
