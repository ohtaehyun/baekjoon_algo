const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const nums = input.split("\n");

for (const num of nums) {
  if (num === "0") break;

  let left = 0;
  let right = num.length - 1;

  let isPalindrome = true;
  while (left <= right) {
    if (num[left] === num[right]) {
      left++;
      right--;
    } else {
      isPalindrome = false;
      break;
    }
  }

  console.log(isPalindrome ? "yes" : "no");
}
