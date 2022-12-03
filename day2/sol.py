with open("input.txt", "r") as f:
  i = f.read()
  ans = {
    "A": {
      "X": 3,
      "Y": 3+1,
      "Z": 6+2,
    },
    "B": {
      "X": 1,
      "Y": 3+2,
      "Z": 6+3,
    },
    "C": {
      "X": 2,
      "Y": 3+3,
      "Z": 6+1,
    }
  }
  score = 0
  for m in i.split("\n"):
    op = m.split(" ")[0]
    me = m.split(" ")[1]
    sc = ans[op][me]
    score += sc
  print(score) 


    
