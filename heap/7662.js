//https://www.acmicpc.net/problem/7662
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

class Heap {
  constructor(compare) {
    this._heap = [];
    this._compare = compare;
  }

  peek() {
    if (this._heap.length === 0) return undefined;
    return this._heap[0];
  }

  push(n) {
    this._heap.push(n);
    this._bubbleUp();
  }

  pop() {
    if (this._heap.length === 0) return undefined;
    if (this._heap.length === 1) return this._heap.pop();

    const top = this._heap[0];
    this._heap[0] = this._heap.pop();
    this._bubbleDown();

    return top;
  }

  _bubbleUp() {
    let idx = this._heap.length - 1;

    while (0 < idx) {
      const parent = Math.floor((idx - 1) / 2);
      if (this._compare(this._heap[parent], this._heap[idx])) break;

      this._swap(idx, parent);
      idx = parent;
    }
  }

  _bubbleDown() {
    let idx = 0;
    const length = this._heap.length;

    while (true) {
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;
      let idx2 = idx;

      if (left < length && this._compare(this._heap[left], this._heap[idx2])) idx2 = left;
      if (right < length && this._compare(this._heap[right], this._heap[idx2])) idx2 = right;

      if (idx2 === idx) break;
      this._swap(idx, idx2);
      idx = idx2;
    }
  }

  _swap(idx1, idx2) {
    [this._heap[idx1], this._heap[idx2]] = [this._heap[idx2], this._heap[idx1]];
  }
}

class DualPriorityQueue {
  constructor() {
    this._maxHeap = new Heap((a, b) => a > b);
    this._minHeap = new Heap((a, b) => a < b);
    this._ignoreMax = new Map();
    this._ignoreMin = new Map();
  }

  push(n) {
    this._maxHeap.push(n);
    this._minHeap.push(n);
  }

  maxPop() {
    while (true) {
      const max = this._maxHeap.pop();

      if (max === undefined) return undefined;

      if (this._ignoreMax.has(max)) {
        this._decIgnoreMax(max);
        continue;
      }

      this._incIgnoreMin(max);
      return max;
    }
  }

  _incIgnoreMax(n) {
    if (this._ignoreMax.has(n)) {
      this._ignoreMax.set(n, this._ignoreMax.get(n) + 1);
    } else {
      this._ignoreMax.set(n, 1);
    }
  }

  _decIgnoreMax(n) {
    const cnt = this._ignoreMax.get(n) || 1;
    if (cnt === 1) {
      this._ignoreMax.delete(n);
    } else {
      this._ignoreMax.set(n, cnt - 1);
    }
  }

  minPop() {
    while (true) {
      const min = this._minHeap.pop();

      if (min === undefined) return undefined;

      if (this._ignoreMin.has(min)) {
        this._decIgnoreMin(min);
        continue;
      }

      this._incIgnoreMax(min);
      return min;
    }
  }

  _incIgnoreMin(n) {
    if (this._ignoreMin.has(n)) {
      this._ignoreMin.set(n, this._ignoreMin.get(n) + 1);
    } else {
      this._ignoreMin.set(n, 1);
    }
  }

  _decIgnoreMin(n) {
    const cnt = this._ignoreMin.get(n) || 1;
    if (cnt === 1) {
      this._ignoreMin.delete(n);
    } else {
      this._ignoreMin.set(n, cnt - 1);
    }
  }

  peekMax() {
    while (true) {
      const top = this._maxHeap.peek();
      if (top === undefined) return top;

      if (this._ignoreMax.has(top)) {
        this._decIgnoreMax(top);
        this._maxHeap.pop();
      } else {
        return top;
      }
    }
  }

  peekMin() {
    while (true) {
      const top = this._minHeap.peek();
      if (top === undefined) return top;

      if (this._ignoreMin.has(top)) {
        this._decIgnoreMin(top);
        this._minHeap.pop();
      } else {
        return top;
      }
    }
  }
}

const lines = input.split("\n");
const answer = [];

let i = 1;
while (i < lines.length) {
  const cnt = Number(lines[i++]);
  const dpq = new DualPriorityQueue();
  for (let j = 0; j < cnt; j++) {
    const [cmd, option] = lines[i + j].split(" ");
    if (cmd === "I") {
      dpq.push(Number(option));
    } else {
      if (option === "-1") {
        dpq.minPop();
      } else {
        dpq.maxPop();
      }
    }
  }
  i += cnt;
  const [max, min] = [dpq.peekMax(), dpq.peekMin()];

  if (max === undefined || min === undefined) {
    answer.push("EMPTY");
  } else {
    answer.push(`${max} ${min}`);
  }
}

console.log(answer.join("\n"));
