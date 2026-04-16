const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const [[N, K], ranks] = input.split("\n").map((_) => _.split(" ").map((__) => Number(__)));
console.log(ranks.map((rank) => getGrade(N, rank)).join(" "));

function getGrade(students, rank) {
  const p = Math.floor((rank * 100) / students);
  if (p <= 4) {
    return 1;
  } else if (p <= 11) {
    return 2;
  } else if (p <= 23) {
    return 3;
  } else if (p <= 40) {
    return 4;
  } else if (p <= 60) {
    return 5;
  } else if (p <= 77) {
    return 6;
  } else if (p <= 89) {
    return 7;
  } else if (p <= 96) {
    return 8;
  } else {
    return 9;
  }
}
