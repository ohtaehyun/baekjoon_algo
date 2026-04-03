//https://www.acmicpc.net/problem/9375
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");
const tests = Number(lines[0]);
let position = 1;
for (let test = 0; test < tests; test++) {
  const N = Number(lines[position++]);
  const wardrobe = new Map();
  for (let i = 0; i < N; i++) {
    const [, type] = lines[position++].split(" ");
    wardrobe.has(type) ? wardrobe.set(type, wardrobe.get(type) + 1) : wardrobe.set(type, 2);
  }

  console.log(Array.from(wardrobe.values()).reduce((memo, cnt) => cnt * memo, 1) - 1);
}
