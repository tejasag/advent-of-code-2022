let i = await Deno.readTextFile("./input.txt");

let def = i
  .split("\n\n")[0]
  .split("\n")
  .map((b) => b.split(""));

def = def[0]
  .map((_, j) => def.map((row) => row[j]))
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

i.split("\n\n")[1]
  .split("\n")
  .map((a) => a.split(" "))
  .map((a) => a.filter(Number))
  .map((a) => a.map(Number))
  .forEach(
    ([a, b, c]) =>
      // Remove the .reverse() for part 1
      (def[c - 1] = [...def[b - 1].splice(0, a).reverse(), ...def[c - 1]])
  );

console.log(def.map((a) => a[0]).reduce((a, b) => a + b));
