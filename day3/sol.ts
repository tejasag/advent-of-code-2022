let i = (await Deno.readTextFile("./input.txt")).split("\n");

console.log(
  i
    .map((a) => {
      let arr = a.split("");
      let a1 = arr.slice(0, arr.length / 2);
      let a2 = arr.slice((-1 * arr.length) / 2);
      let common = "";
      a1.forEach((x) => {
        a2.forEach((y) => {
          if (x === y) {
            common = x;
          }
        });
      });
      let n =
        common === common.toLowerCase()
          ? common.charCodeAt(0) - 96
          : common.charCodeAt(0) - 64 + 26;
      return n;
    })
    .reduce((a, b) => a + b)
);

/* Part 2 */

let score = 0;
for (let k = 0; k < i.length; k += 3) {
  let common = "";
  let ar1 = i[k].split("");
  let ar2 = i[k + 1].split("");
  let ar3 = i[k + 2].split("");
  ar1.forEach((x) => {
    ar2.forEach((y) => {
      ar3.forEach((z) => {
        if (x === y && y === z) common = x;
      });
    });
  });
  let n =
    common === common.toLowerCase()
      ? common.charCodeAt(0) - 96
      : common.charCodeAt(0) - 64 + 26;
  score += n;
}
console.log(score);
