const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const [[N], ...edges] = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));

const edgeList = Array.from({ length: N + 1 }, () => []);
const parents = new Array(N + 1);
const visited = new Array(N + 1).fill(false);

for (const [from, to] of edges) {
  edgeList[from].push(to);
  edgeList[to].push(from);
}

let idx = 0;
const queue = [1];
visited[1] = true;

while (idx < queue.length) {
  const now = queue[idx];

  for (const next of edgeList[now]) {
    if (!visited[next]) {
      queue.push(next);
      visited[next] = true;
      parents[next] = now;
    }
  }

  idx++;
}

const answer = parents.filter((_, idx) => idx >= 2).join("\n");

console.log(answer);
