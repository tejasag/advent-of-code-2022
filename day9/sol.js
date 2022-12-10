let input = await Deno.readTextFile("./input.txt");
// let input = await Deno.readTextFile("./i-q.txt");

input = input
  .split("\n")
  .map((a) => a.split(" "))
  .map(([a, b]) => [a, parseInt(b)]);

let count = new Set();
let t = [1, 1],
  h = [1, 1];

const move = (op, c) =>
  ({
    L: [c[0] - 1, c[1]],
    R: [c[0] + 1, c[1]],
    U: [c[0], c[1] + 1],
    D: [c[0], c[1] - 1],
  }[op]);

for (const [op, c] of input) {
  console.log(op, c);
  for (let i = 1; i <= c; i++) {
    h = move(op, h);
    if (!(Math.abs(h[0] - t[0]) <= 1 && Math.abs(h[1] - t[1]) <= 1)) {
      if (Math.abs(h[0] - t[0]) > 1 || Math.abs(h[1] - t[1]) > 1)
        op === "R" || op === "L" ? (t[1] = h[1]) : (t[0] = h[0]);
      t = move(op, t);
    }

    count.add(`${t[0]},${t[1]}`);
    console.log(t, h);
  }
}

console.log(count);
console.log(count.size);
