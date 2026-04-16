const fs = require("fs");
const N = BigInt(fs.readFileSync(0, "utf-8").toString());

const factorial = (left, right) => {
  const mid = (left + right) / 2n;
  if (left < right) {
    return BigInt(factorial(left, mid)) * BigInt(factorial(mid + 1n, right));
  } else {
    return left;
  }
};

const f = factorial(1n, N).toString();

let idx = 0;
while (true) {
  if (f[f.length - idx - 1] !== "0") {
    console.log(idx);
    break;
  }
  idx++;
}
