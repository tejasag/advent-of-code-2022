let input = await Deno.readTextFile("./input.txt");
input = input.split("\n").map((a) => a.split(" "));

let cycle = 0,
  X = 1;

const check = [20, 60, 100, 140, 180, 220];
let sum = 0;
let img = [];

const e = () => {
  cycle++;

  //  Part 1
  if (check.includes(cycle)) sum += cycle * X;

  // Part 2
  let pos = (cycle - 1) % 40;
  let idx = parseInt((cycle - 1) / 40);
  if (!img[idx]) img[idx] = "";
  if (X - 1 === pos || X === pos || X + 1 === pos) img[idx] += "#";
  else img[idx] += ".";
};

for (let [op, v] of input) {
  if (op === "noop") e();
  else {
    e();
    e();
    X += parseInt(v);
  }
}

console.log(sum);
console.log(img.join("\n"));
