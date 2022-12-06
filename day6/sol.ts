let i = (await Deno.readTextFile("./input.txt")).split("");
let sol;

function hasDup(array: any[]) {
  return new Set(array).size !== array.length;
}

for (let j = 3; j < i.length; j++) {
  if (!hasDup(i.slice(j - 3, j + 1))) {
    sol = j + 1;
    break;
  }
}
console.log(sol);

//  Part 2

for (let j = 13; j < i.length; j++) {
  if (!hasDup(i.slice(j - 13, j + 1).reverse())) {
    sol = j + 1;
    break;
  }
}
console.log(sol);
