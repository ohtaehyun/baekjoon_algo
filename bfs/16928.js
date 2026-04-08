// https://www.acmicpc.net/problem/16928
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");
const [N, M] = lines[0].split(" ").map(Number);
const events = Array(100).fill(null);

for (let i = 1; i <= N + M; i++) {
  const [from, to] = lines[i].split(" ").map(Number);
  events[from - 1] = to - 1;
}

const costs = Array(100).fill(Infinity);
costs[0] = 0;

const queue = [[0, 0]];
let idx = 0;
while (idx < queue.length) {
  const [now, cost] = queue[idx++];

  if (costs[now] < cost) continue;

  for (let i = 1; i <= 6; i++) {
    const [next, nextCost] = [now + i, cost + 1];
    if (100 <= next) continue;
    if (nextCost < costs[next]) {
      costs[next] = nextCost;
      if (events[next] !== null) {
        queue.push([events[next], nextCost]);
        costs[events[next]] = nextCost;
      } else {
        queue.push([next, nextCost]);
      }
    }
  }
}
console.log(costs[99]);
