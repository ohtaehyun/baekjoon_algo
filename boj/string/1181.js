// https://www.acmicpc.net/problem/1181
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
const [N, ...words] = input.split("\n");

const uniqueWords = new Set(words);

console.log(
  Array.of(...uniqueWords.values())
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n")
);
