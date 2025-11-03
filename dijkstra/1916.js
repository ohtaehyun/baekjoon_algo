// https://www.acmicpc.net/problem/1916
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  length() {
    return this.heap.length;
  }

  push(n) {
    this.heap.push(n);
    this._bubbleUp();
  }

  pop() {
    if (this.length() < 2) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return top;
  }

  _bubbleUp() {
    let idx = this.length() - 1;
    while (0 < idx) {
      const parent = Math.floor((idx - 1) / 2);
      if (this._compare(parent, idx)) break;
      this._swap(idx, parent);
      idx = parent;
    }
  }

  _bubbleDown() {
    const length = this.length();
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

  _compare(idx1, idx2) {
    return this.heap[idx1][1] <= this.heap[idx2][1];
  }

  _swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}

const [n, , ...lines] = input.split("\n");
const N = Number(n);

const [from, to] = lines
  .pop()
  .split(" ")
  .map((_) => Number(_));

const edges = Array.from({ length: N + 1 }, () => []);

for (const line of lines) {
  const [start, end, fee] = line.split(" ").map((_) => Number(_));
  edges[start].push([end, fee]);
}

function dijkstra(start) {
  const feeTable = Array(N + 1).fill(Infinity);
  feeTable[start] = 0;
  const pq = new PriorityQueue();
  pq.push([start, 0]);

  while (pq.length()) {
    const [now, nowFee] = pq.pop();

    if (nowFee > feeTable[now]) continue;
    if (now === to) break;

    for (const [next, nextFee] of edges[now]) {
      if (nowFee + nextFee < feeTable[next]) {
        feeTable[next] = nowFee + nextFee;
        pq.push([next, nowFee + nextFee]);
      }
    }
  }

  return feeTable;
}

console.log(dijkstra(from)[to]);
