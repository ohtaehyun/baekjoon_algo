// https://codeforces.com/contest/2218/problem/G
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const lines = input.split("\n");
const answer = [];
const MOD = 676767677n;

let lineIdx = 0;
const T = parseInt(lines[lineIdx++]);

for (let t = 0; t < T; t++) {
  const [n, m] = lines[lineIdx++].split(" ").map(Number);
  const b = lines[lineIdx++].split(" ").map(Number);

  // freq[v] = b[i] == v 인 사람 수
  const freq = new Array(m).fill(0);
  for (let i = 0; i < n; i++) freq[b[i]]++;

  // cnt[t] = b[j] < t 인 사람 수 (시각 t 이전에 앉은 사람 수)
  const cnt = new Array(m + 1).fill(0);
  for (let tt = 1; tt <= m; tt++) cnt[tt] = cnt[tt - 1] + freq[tt - 1];

  let ans = 1n;

  for (let i = 0; i < n; i++) {
    if (b[i] === 0) continue; // a[i]=0 고정, 1가지

    const left = i > 0 ? b[i - 1] : Infinity;
    const right = i < n - 1 ? b[i + 1] : Infinity;
    const minNeighbor = Math.min(left, right);

    // 이웃 중 나보다 먼저 앉은 사람이 없으면 불가능
    if (minNeighbor >= b[i]) {
      ans = 0n;
      break;
    }

    let choices;
    if (minNeighbor === b[i] - 1) {
      // b[i]-1 시각에 이웃 조건 불만족 → a[i]는 1~cnt[b[i]] 아무거나 가능
      choices = cnt[b[i]];
    } else {
      // b[i]-1 시각에 이웃 조건 이미 만족 → 사람 수 조건이 막아야 함
      // cnt[b[i]-1] < a[i] <= cnt[b[i]]
      choices = cnt[b[i]] - cnt[b[i] - 1];
    }

    if (choices <= 0) {
      ans = 0n;
      break;
    }

    ans = (ans * BigInt(choices)) % MOD;
  }

  answer.push(ans.toString());
}

console.log(answer.join("\n"));
