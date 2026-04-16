// https://www.acmicpc.net/problem/11403
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");
const N = Number(lines[0]);
const dist = Array.from({ length: N }, () => Array(N).fill(Infinity));
for (let i = 1; i < lines.length; i++) {
  lines[i].split(" ").forEach((c, j) => {
    if (c !== "0") dist[i - 1][j] = 1;
  });
}

for (let mid = 0; mid < N; mid++) {
  for (let start = 0; start < N; start++) {
    for (let end = 0; end < N; end++) {
      if (dist[start][end] > dist[start][mid] + dist[mid][end]) {
        dist[start][end] = dist[start][mid] + dist[mid][end];
      }
    }
  }
}

let answer = [];
for (const arr of dist) {
  answer.push(arr.map((d) => (d !== Infinity ? 1 : 0)).join(" "));
}

console.log(answer.join("\n"));
