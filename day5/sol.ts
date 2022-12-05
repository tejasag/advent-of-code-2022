let i = await Deno.readTextFile("./input.txt");

let def = i.split("\n\n")[0];
let ins = i
  .split("\n\n")[1]
  .split("\n")
  .map((a) => a.split(" "))
  .map((a) => a.filter((b) => !isNaN(parseInt(b))))
  .map((a) => a.map((b) => parseInt(b)));
let arr: string[][] = [...Array(100)].map((a) => []);
def.split("\n").map((b) => b.split("").map((a, i) => arr[i].push(a)));
arr = arr
  .filter(
    (a) =>
      !(
        a.includes("[") ||
        a.includes("]") ||
        a.filter((b) => b === " ").length === a.length
      )
  )
  .map((a) => a.splice(0, a.length - 1))
  .map((a) => a.filter((b) => b != " "));

ins.forEach(
  ([a, b, c]) =>
    // Remove the .reverse() for part 1
    (arr[c - 1] = [...arr[b - 1].splice(0, a).reverse(), ...arr[c - 1]])
);
console.log(arr.map((a) => a[0]).reduce((a, b) => a + b));
