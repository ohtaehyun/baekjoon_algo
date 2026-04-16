// https://www.acmicpc.net/problem/11404
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const [[n], [m], ...edges] = input.split("\n").map((line) => line.split(" ").map((_) => Number(_)));

const feeTable = Array.from({ length: n }, () => Array(n).fill(Infinity));
for (let i = 0; i < n; i++) {
  feeTable[i][i] = 0;
}

edges.forEach(
  ([start, end, fee]) =>
    (feeTable[start - 1][end - 1] = fee < feeTable[start - 1][end - 1] ? fee : feeTable[start - 1][end - 1])
);

for (let mid = 0; mid < n; mid++) {
  for (let start = 0; start < n; start++) {
    for (let end = 0; end < n; end++) {
      if (feeTable[start][end] > feeTable[start][mid] + feeTable[mid][end])
        feeTable[start][end] = feeTable[start][mid] + feeTable[mid][end];
    }
  }
}

feeTable.forEach((row) => console.log(row.map((fee) => (fee === Infinity ? 0 : fee)).join(" ")));
