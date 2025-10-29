const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");

function isBetween(v, l, r) {
  return l <= v && v < r;
}

function getMineCount(r, c, map) {
  const row = map.length;
  const col = map[0].length;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  let count = 0;
  for (const [dr, dc] of directions) {
    const [nr, nc] = [r + dr, c + dc];
    if (isBetween(nr, 0, row) && isBetween(nc, 0, col) && map[nr][nc] === "*") {
      count++;
    }
  }

  return count;
}

let idx = 0;
while (true) {
  if (lines[idx] === "0 0") break;
  const [row, col] = lines[idx].split(/\s+/).map((_) => Number(_));

  const maps = [];
  const answers = [];
  for (let j = idx + 1; j < idx + row + 1; j++) {
    maps.push(lines[j].split(""));
  }

  for (let r = 0; r < row; r++) {
    answers.push([]);
    for (let c = 0; c < col; c++) {
      answers[r].push(maps[r][c] === "*" ? "*" : getMineCount(r, c, maps));
    }
  }

  answers.forEach((ans) => console.log(ans.join("")));
  idx += row + 1;
}
