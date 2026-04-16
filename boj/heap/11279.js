// https://www.acmicpc.net/problem/11279
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const [, ...nums] = input.split("\n").map((_) => Number(_));

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(n) {
    this.heap.push(n);
    this._bubbleUp();
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;

    while (0 < idx) {
      const parent = Math.floor((idx - 1) / 2);
      if (this._compare(parent, idx)) break;
      this._swap(idx, parent);
      idx = parent;
    }
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return top;
  }

  _bubbleDown() {
    const length = this.heap.length;

    let idx = 0;
    while (idx < length) {
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;

      let maxIdx = idx;

      if (left < length && this._compare(left, maxIdx)) maxIdx = left;
      if (right < length && this._compare(right, maxIdx)) maxIdx = right;

      if (maxIdx === idx) break;
      this._swap(maxIdx, idx);
      idx = maxIdx;
    }
  }

  _compare(idx1, idx2) {
    return this.heap[idx1] >= this.heap[idx2];
  }

  _swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}

const minHeap = new MaxHeap();

const out = [];
nums.forEach((num) => (num !== 0 ? minHeap.push(num) : out.push(minHeap.pop())));

console.log(out.join("\n"));
