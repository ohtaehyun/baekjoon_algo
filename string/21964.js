const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const [N, S] = input.split("\n");
console.log(S.slice(S.length - 5));
