with open("input.txt", "r") as f:
  i = f.read() 
  sol = sorted(map(lambda x: sum(map(int, x.split("\n"))), i.split("\n\n")[:-1]), reverse=True)
  print(sol[0])
  print(sol[0] + sol[1] + sol[2])
  
