//https://www.acmicpc.net/problem/28114
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const people = input.split("\n").map((line) =>
  line.split(" ").map((_, idx) => {
    switch (idx) {
      case 0:
        return Number(_);
      case 1:
        return _ % 100;
      case 2:
        return _[0];
    }
  })
);

console.log(
  people
    .map((_) => _[1])
    .sort((a, b) => a - b)
    .join("")
);
console.log(
  people
    .sort((a, b) => b[0] - a[0])
    .map((_) => _[2])
    .join("")
);
