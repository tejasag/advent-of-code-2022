let i = (await Deno.readTextFile("./input.txt")).split("\n\n");

let sol = i
  .slice(0, i.length - 1)
  .map((x) =>
    x
      .split("\n")
      .map(Number)
      .reduce((a, b) => a + b)
  )
  .sort((a, b) => b - a);

console.log(sol[0]);
console.log(sol[0] + sol[1] + sol[2]);
