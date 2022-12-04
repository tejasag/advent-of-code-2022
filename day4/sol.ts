let i = (await Deno.readTextFile("./input.txt")).split("\n");

console.log(
  i
    .map((a) => a.split(","))
    .map(([a, b]) => [a.split("-"), b.split("-")])
    .map((a) => a.map((b) => b.map((c) => parseInt(c))))
    .map(([[a, b], [c, d]]) =>
      (a <= c && d <= b) || (c <= a && b <= d) ? 1 : 0
    )
    .reduce((a, b) => a + b)
);

//  Part 2

console.log(
  i
    .map((a) => a.split(","))
    .map(([a, b]) => [a.split("-"), b.split("-")])
    .map((a) => a.map((b) => b.map((c) => parseInt(c))))
    .map(([[a, b], [c, d]]) => ((a < c && b < c) || (c < a && d < a) ? 0 : 1))
    .reduce((a, b) => a + b)
);
