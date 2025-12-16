// https://www.acmicpc.net/problem/1753
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() { 
    return this.size() === 0 ;
  }

  _compare(idx1, idx2) {
    return this.heap[idx1][1] < this.heap[idx2][1];
  }

  _swap(idx1, idx2) {
    [this.heap[idx2], this.heap[idx1]] = [this.heap[idx1], this.heap[idx2]];

  }

  push(item) {
    this.heap.push(item);
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

  pop() {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();

    this._bubbleDown();

    return top;
  }

  _bubbleDown() {
    let idx = 0;
    const length = this.size();
    while (true) {
      const left = idx * 2 + 1
      const right = idx * 2 + 2;
      let min = idx;

      if (left < length && this._compare(left, min)) min = left;
      if (right < length && this._compare(right, min)) min = right;

      if (min === idx) break;
      this._swap(min, idx);
      idx = min;
    }
  }
}

const [[nodeCount], [start], ...edges] = input.split('\n').map(line => line.split(' ').map(_ => Number(_)));

const edgeList = Array.from({length: nodeCount + 1}, () => []);

for(const [from, to, cost] of edges) {
  edgeList[from].push([to, cost]);
}

function dijkstra(start) {
  const dist = Array(nodeCount + 1).fill(Infinity);
  dist[start] = 0;

  const queue = new PriorityQueue();
  queue.push([start, 0]);

  while (queue.size()) {
    const [now, nowFee] = queue.pop();

    if (dist[now] < nowFee) continue;

    for (const [next, nextFee] of edgeList[now]) {
      if (nowFee + nextFee < dist[next]) {
        dist[next] = nowFee + nextFee;
        queue.push([next, nowFee + nextFee])
      }
    }
  }

  return dist;
}

const dist = dijkstra(start);

let answer = [];
for (let i = 1; i <= nodeCount; i++) {
  dist[i] === Infinity ? answer.push('INF') : answer.push(dist[i]);
}
console.log(answer.join('\n'));