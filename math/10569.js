//https://www.acmicpc.net/problem/10569
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");

const answer = [];
for (let i = 1; i < lines.length; i++) {
  const [V, E] = lines[i].split(" ").map(Number);
  answer.push(2 - V + E);
}

console.log(answer.join("\n"));
