//https://www.acmicpc.net/problem/9019
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");
const answer = [];

for (let i = 1; i < lines.length; i++) {
  const [start, end] = lines[i].split(" ").map(Number);
  answer.push(bfs(start, end));
}

console.log(answer.join("\n"));

function bfs(start, end) {
  if (start === end) return "";
  const queue = [start];
  const parent = Array.from({ length: 10000 }, () => null);
  parent[start] = [null, ""];
  let idx = 0;
  while (idx < queue.length) {
    const now = queue[idx++];

    const nexts = [
      [D(now), "D"],
      [S(now), "S"],
      [L(now), "L"],
      [R(now), "R"],
    ];

    for (const [n, cmd] of nexts) {
      if (n === end) {
        let arr = [cmd];
        let p = now;
        while (true) {
          if (p === null) break;
          arr.push(parent[p][1]);
          p = parent[p][0];
        }
        return arr.reverse().join("");
      }
      if (parent[n] === null) {
        parent[n] = [now, cmd];
        queue.push(n);
      }
    }
  }
}

function D(n) {
  return (n * 2) % 10000;
}

function S(n) {
  return n - 1 < 0 ? 9999 : n - 1;
}

function L(n) {
  return (n % 1000) * 10 + Math.floor(n / 1000);
}

function R(n) {
  return Math.floor(n / 10) + (n % 10) * 1000;
}
