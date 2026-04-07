// https://www.acmicpc.net/problem/1389
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n").map((_) => _.split(" ").map(Number));
const [N, M] = lines[0];
const friends = Array.from({ length: N + 1 }, () => []);

class PriorityQueue {
  constructor() {
    this._heap = [];
  }

  push(n) {
    this._heap.push(n);
    this._bubbleUp();
  }

  pop() {
    if (this._heap.length === 0) return null;
    if (this._heap.length === 1) return this._heap.pop();

    const top = this._heap[0];
    this._heap[0] = this._heap.pop();
    this._bubbleDown();
    return top;
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _bubbleUp() {
    let idx = this._heap.length - 1;

    while (0 < idx) {
      const parent = Math.floor((idx - 1) / 2);

      if (this._compare(parent, idx)) break;

      idx = parent;
      this._swap(idx, parent);
    }
  }

  _bubbleDown() {
    const length = this._heap.length;
    let idx = 0;
    while (true) {
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;
      let min = idx;
      if (left < length && this._compare(left, min)) min = left;
      if (right < length && this._compare(right, min)) min = right;

      if (min === idx) break;
      this._swap(idx, min);
      idx = min;
    }
  }

  _swap(idx1, idx2) {
    [this._heap[idx1], this._heap[idx2]] = [this._heap[idx2], this._heap[idx1]];
  }

  _compare(idx1, idx2) {
    if (this._heap[idx1][1] < this._heap[idx2][1]) return true;
    return false;
  }
}

for (let i = 1; i < lines.length; i++) {
  const [a, b] = lines[i];
  friends[a].push([b, 1]);
  friends[b].push([a, 1]);
}

let min = Infinity;
let answer;
for (let i = 1; i <= N; i++) {
  const dist = dijkstra(i);
  const sum = dist.reduce((sum, d) => sum + d, 0);
  if (sum < min) {
    answer = i;
    min = sum;
  }
}

console.log(answer);

function dijkstra(a) {
  const dist = Array(N + 1).fill(Infinity);
  dist[0] = 0;
  dist[a] = 0;

  const pq = new PriorityQueue();
  pq.push([a, 0]);

  while (!pq.isEmpty()) {
    const [now] = pq.pop();
    for (const [friend, cost] of friends[now]) {
      if (dist[now] + cost < dist[friend]) {
        pq.push([friend, dist[now] + cost]);
        dist[friend] = dist[now] + cost;
      }
    }
  }
  return dist;
}
