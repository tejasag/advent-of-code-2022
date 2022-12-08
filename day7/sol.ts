let i = (await Deno.readTextFile("./input.txt")).split("\n");

/*
 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 !!!!!! WARNING: THIS CODE IS BROKEN !!!!!!
 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 I WAS EXPERIMENTING WITH A NEW ALGORITHM AND LIKE AN IDIOT, FORGOT TO COMMIT MY ACTUAL SOLUTION.
 NOW IM TOO LAZY TO WRITE IT AGAIN.

*/

let dir: any = {};

let fol = "";

for (let ij = 0; ij < i.length; ij++) {
  let a = i[ij];
  if (a.startsWith("$")) {
    if (a.includes("cd")) {
      if (fol != "") {
        if (a.split(" ")[2] === "..") {
          let temp = fol.split("/");
          temp.pop();
          fol = temp.join("/");
        } else fol = `${fol}/${a.split(" ")[2]}`;
      } else {
        fol = a.split(" ")[2];
      }
    }

    if (a.includes("ls")) {
      let res = [];
      ij++;
      while (i[ij] && !i[ij].startsWith("$")) {
        res.push(i[ij]);
        ij++;
      }

      a = i[ij];

      if (!dir[fol]) dir[fol] = {};
      res.map((b) => {
        if (b.startsWith("dir")) {
          dir[fol][b.split(" ")[1]] = {};
        } else {
          if (!dir[fol]["files"]) dir[fol]["files"] = [];
          dir[fol]["files"].push(b);
        }
      });
      dir[fol];
    }
  }
}

function findSum(d: any, k?: any) {
  let sum = 0;
  for (let [x, y] of Object.entries(dir)) {
    if (x.includes("/") && x.includes(k)) {
      let e = x.split("/").slice(x.split("/").indexOf(k) - x.split("/").length);
      sum += e.map((a) => findSum(e)).reduce((a, b) => a + b);
    }
  }

  if (d.files)
    (d.files as (string | number)[])
      .map((a: any) => a.split(" ")[0] as number)
      .map(Number)
      .map((a) => (sum += a));

  return sum;
}

let sum = 0;

for (let [k, v] of Object.entries(dir)) {
  let e = findSum(v);
  if (e && e < 100000) sum += e;
}

console.log(sum);
