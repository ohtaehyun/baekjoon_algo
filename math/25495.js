const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const [[N], phones] = input.split("\n").map((_) => _.split(" ").map((__) => Number(__)));
let consume = 0;
let usedBattery = 0;
let lastPhone = null;
for (const phone of phones) {
  if (phone === lastPhone) consume *= 2;
  else consume = 2;

  usedBattery += consume;
  lastPhone = phone;
  if (usedBattery >= 100) {
    lastPhone = null;
    usedBattery = 0;
  }
}

console.log(usedBattery);
