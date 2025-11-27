// https://www.acmicpc.net/problem/1991
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const [, ...edges] = input.split("\n").map((_) => _.split(" "));

const edgeMap = new Map();

for (const [from, left, right] of edges) {
  edgeMap.set(from, [left !== "." ? left : null, right !== "." ? right : null]);
}

function preorder(node) {
  if (!node) return "";
  const [left, right] = edgeMap.get(node);
  return node + preorder(left) + preorder(right);
}

function inorder(node) {
  if (!node) return "";
  const [left, right] = edgeMap.get(node);
  return inorder(left) + node + inorder(right);
}

function postorder(node) {
  if (!node) return "";
  const [left, right] = edgeMap.get(node);
  return postorder(left) + postorder(right) + node;
}

// 결과 출력
console.log(preorder("A"));
console.log(inorder("A"));
console.log(postorder("A"));
