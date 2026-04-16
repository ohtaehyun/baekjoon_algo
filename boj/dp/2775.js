//https://www.acmicpc.net/problem/2775
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
const [_, ...lines] = input.split("\n").map((_) => Number(_));

for (let i = 0; i < lines.length; i += 2) {
  const [k, n] = [lines[i], lines[i + 1]];

  const apart = [Array.from({ length: n + 1 }, (v, k) => k)];

  for (let floor = 0; floor < k; floor++) {
    apart.push(apart[floor].reduce((nextFloor, people, idx) => [...nextFloor, (nextFloor[idx - 1] ?? 0) + people], []));
  }

  console.log(apart[k][n]);
}
