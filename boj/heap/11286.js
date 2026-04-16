const fs = require("fs");
class AbsoluteHeap {
  constructor() {
    this._tree = [];
  }

  push(num) {
    this._tree.push(num);
    this._bubbleUp();
  }

  pop() {
    if (this.isEmpty()) return 0;
    if (this.size() === 1) return this._tree.pop();

    const top = this._tree[0];
    this._tree[0] = this._tree.pop();
    this._bubbleDown();
    return top;
  }

  size() {
    return this._tree.length;
  }

  isEmpty() {
    return this.size() === 0;
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

  _bubbleDown() {
    const length = this.size();
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
    if (Math.abs(this._tree[idx1]) < Math.abs(this._tree[idx2])) return true;
    if (Math.abs(this._tree[idx1]) === Math.abs(this._tree[idx2]) && this._tree[idx1] < this._tree[idx2]) return true;
    return false;
  }

  _swap(idx1, idx2) {
    [this._tree[idx1], this._tree[idx2]] = [this._tree[idx2], this._tree[idx1]];
  }
}

const input = fs.readFileSync(0, "utf8").toString().trim();

const cmds = input.split("\n").map((_) => Number(_));
const heap = new AbsoluteHeap();

const answer = [];
for (let i = 1; i < cmds.length; i++) {
  const cmd = cmds[i];
  if (cmd === 0) {
    answer.push(heap.pop());
  } else {
    heap.push(cmd);
  }
}

console.log(answer.join("\n"));
