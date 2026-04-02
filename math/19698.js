const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const [N, W, H, L] = input.split(" ").map((_) => Number(_));
const [r, c] = [Math.floor(W / L), Math.floor(H / L)];

console.log(r * c > N ? N : r * c);
