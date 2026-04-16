const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const [[N], nums] = input.split("\n").map((_) => _.split(" ").map((__) => Number(__)));

const sum = (N * (N + 1)) / 2;
console.log(sum - nums.reduce((s, n) => s + n, 0));
