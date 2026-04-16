//https://www.acmicpc.net/problem/30804
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
const S = input.split("\n")[1].split(" ").map(Number);

class Counter {
  constructor() {
    this._map = new Map();
    this._total = 0;
  }

  inc(n) {
    if (this._map.has(n)) {
      this._map.set(n, this._map.get(n) + 1);
    } else {
      this._map.set(n, 1);
    }
    this._total++;
  }

  dec(n) {
    if (!this._map.has(n)) return;
    if (this._map.get(n) === 1) this._map.delete(n);
    else this._map.set(n, this._map.get(n) - 1);
    this._total--;
  }

  size() {
    return this._map.size;
  }

  total() {
    return this._total;
  }
}

const counter = new Counter();
let answer = -Infinity;
let left = 0;
let right = 0;

while (left < S.length && right < S.length) {
  counter.inc(S[right]);
  right++;
  while (counter.size() > 2) {
    counter.dec(S[left]);
    left++;
  }

  if (counter.total() > answer) {
    answer = counter.total();
  }
}

console.log(answer);
