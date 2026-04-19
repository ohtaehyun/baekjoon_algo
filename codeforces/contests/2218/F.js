// https://codeforces.com/contest/2218/problem/F
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");
const answer = [];

for (let t = 1; t < lines.length; t++) {
  /**
   * x 짝수 노드의 수
   * y 홀수 노드의 수
   */
  const [x, y] = lines[t].split(" ").map(Number);

  /**
   * 짝수 노드는 홀수 노드의 합으로만 이루어 짐 (1 + 1), (1 + 3)
   * 따라서 홀수 노드의 개수보다 짝수노드의 수가 클 수 없음
   * 만약 짝수 노드가 없다면 홀수 노드가 짝수개일 수 없음 (홀수를 짝수번 더하면 항상 짝수가 만들어짐)
   */
  if (x > y || (x === 0 && y % 2 === 0)) {
    answer.push("NO");
    continue;
  }

  answer.push("YES");

  // 루트 노드에 다른 모든 노드가 달려있는 경우
  if (x === 0) {
    for (let i = 2; i <= y; i++) {
      answer.push(`1 ${i}`);
    }
    continue;
  }

  // 우선 일자로 짝수노드의 두배만큼 연결 이러면 짝수노드 x개 홀수노드 x개가 만들어짐
  for (let i = 1; i < 2 * x; i++) {
    answer.push(`${i} ${i + 1}`);
  }

  //남은 노드의 수에따라서 1번 노드에 붙일지 2번 노드에 붙일지 결정
  const remain = y - x;
  const from = remain % 2 === 0 ? 1 : 2;
  for (let i = 2 * x + 1; i <= x + y; i++) {
    answer.push(`${from} ${i}`);
  }
}

console.log(answer.join("\n"));
