const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const [[rail], [moveA, flight, moveB]] = input.split("\n").map((_) => _.split(" ").map((__) => Number(__)));

if (rail <= 240 || rail <= moveA + flight + moveB) {
  console.log("high speed rail");
} else {
  console.log("flight");
}
