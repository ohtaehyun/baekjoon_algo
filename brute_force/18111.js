//https://www.acmicpc.net/problem/18111
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();
const lines = input.split("\n").map((_) => _.split(" ").map(Number));

const [N, M, B] = lines[0];
let minTime = Infinity;
let minHeight = Infinity;
let height = 0;

while (height <= 256) {
  let time = 0;
  let get = 0;
  let used = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const h = lines[i + 1][j];
      if (h > height) {
        time += 2 * (h - height);
        get += h - height;
      } else {
        time += height - h;
        used += height - h;
      }
    }
  }

  if (used > get + B) break;

  if (time < minTime || (time === minTime && height > minHeight)) {
    minTime = time;
    minHeight = height;
  }

  height++;
}

console.log(minTime, minHeight);
