//https://www.acmicpc.net/problem/1202
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(gem) {
    this.heap.push(gem);
    this._bubbleUp();
  }

  _bubbleUp() {
    let idx = this.size() - 1;

    while (0 < idx) {
      const parent = Math.floor((idx - 1) / 2);
      if (this._compare(parent, idx)) break;
      this._swap(idx, parent);
      idx = parent;
    }
  }

  _compare(idx1, idx2) {
    return this.heap[idx2][1] < this.heap[idx1][1];
  }
  _swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  pop() {
    if (this.size() <= 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return top;
  }

  _bubbleDown() {
    let idx = 0;
    const length = this.size();
    while (idx < length) {
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;
      let maxIdx = idx;

      if (left < length && this._compare(left, maxIdx)) maxIdx = left;
      if (right < length && this._compare(right, maxIdx)) maxIdx = right;

      if (maxIdx === idx) break;
      this._swap(idx, maxIdx);
      idx = maxIdx;
    }
  }
}

const lines = input.split("\n");
const [n, k] = lines[0].split(" ").map((_) => Number(_));

const knapsacks = [];
const gems = [];

for (let i = 1; i <= n; i++) {
  const gem = lines[i].split(" ").map((_) => Number(_));
  gems.push(gem);
}

for (let i = n + 1; i <= n + k; i++) {
  knapsacks.push(Number(lines[i]));
}
gems.sort((a, b) => b[0] - a[0]);
knapsacks.sort((a, b) => a - b);

const pq = new PriorityQueue();

let answer = 0;
for (const knapsack of knapsacks) {
  while (gems.length && gems[gems.length - 1][0] <= knapsack) {
    pq.push(gems.pop());
  }

  const gem = pq.pop();
  answer += gem ? gem[1] : 0;
}

console.log(answer);
