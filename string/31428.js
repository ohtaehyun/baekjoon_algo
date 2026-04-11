// https://www.acmicpc.net/problem/31428
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n");

const counter = {
  C: 0,
  S: 0,
  I: 0,
  A: 0,
};

lines[1].split(" ").forEach((track) => (counter[track] += 1));
console.log(counter[lines[2].trim()]);
