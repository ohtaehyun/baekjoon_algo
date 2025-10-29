// https://www.acmicpc.net/problem/1264
const fs = require("fs");
const inputs = fs.readFileSync(0, "utf-8").toString().trim().split(/\n/);

for (const line of inputs) {
  if (line === "#") break;
  const count = line
    .toLowerCase()
    .split("")
    .filter((char) => ["a", "e", "i", "o", "u"].includes(char)).length;

  console.log(count);
}
