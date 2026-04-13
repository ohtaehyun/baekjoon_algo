// https://www.acmicpc.net/problem/17487
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const hands = {
  q: 0,
  w: 0,
  e: 0,
  r: 0,
  t: 0,
  y: 0,
  a: 0,
  s: 0,
  d: 0,
  f: 0,
  g: 0,
  z: 0,
  x: 0,
  c: 0,
  v: 0,
  b: 0,
  u: 1,
  i: 1,
  o: 1,
  p: 1,
  h: 1,
  j: 1,
  k: 1,
  l: 1,
  n: 1,
  m: 1,
};

const answer = [0, 0];
let free = 0;

for (const c of input) {
  if (c === " ") {
    free += 1;
    continue;
  }

  if ("A".charCodeAt() <= c.charCodeAt() && c.charCodeAt() < "a".charCodeAt()) {
    free += 1;
  }
  answer[hands[c.toLowerCase()]] += 1;
}

while (free > 0) {
  free--;
  const [left, right] = answer;
  if (left <= right) answer[0]++;
  else answer[1]++;
}

console.log(answer.join(" "));
