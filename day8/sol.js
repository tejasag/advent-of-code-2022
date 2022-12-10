// yes, i know its ugly. no need to rub it in ;-;

let input = await Deno.readTextFile("./input.txt");

input = input
  .split("\n")
  .map((a) => a.split(""))
  .map((a) => a.map(Number));

let total = 0;
total += input[0].length * 2 + (input.length - 2) * 2;

let scenic = 0;

for (let i = 1; i < input.length - 1; i++) {
  for (let j = 1; j < input[i].length - 1; j++) {
    let check = 0;
    let s = 1;
    let c = 0;

    for (let k = j - 1; k >= 0; k--) {
      c++;
      if (input[i][k] >= input[i][j]) {
        s *= c;
        c = 0;
        break;
      }
      if (k === 0) {
        s *= c;
        c = 0;
        check++;
      }
    }

    for (let k = j + 1; k < input[i].length; k++) {
      c++;
      if (input[i][k] >= input[i][j]) {
        s *= c;
        c = 0;
        break;
      }
      if (k === input[i].length - 1) {
        s *= c;
        c = 0;
        check++;
      }
    }

    for (let k = i - 1; k >= 0; k--) {
      c++;
      if (input[k][j] >= input[i][j]) {
        s *= c;
        c = 0;
        break;
      }
      if (k === 0) {
        s *= c;
        c = 0;
        check++;
      }
    }

    for (let k = i + 1; k < input.length; k++) {
      c++;
      if (input[k][j] >= input[i][j]) {
        s *= c;
        c = 0;
        break;
      }
      if (k === input.length - 1) {
        s *= c;
        c = 0;
        check++;
      }
    }

    if (s > scenic) scenic = s;
    if (check > 0) total++;
  }
}

console.log(total);
console.log(scenic);
