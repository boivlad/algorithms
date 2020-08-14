const solution = (n, h) => {
  const dic = {}
  const countPos = (a, b) => a * 100 + b
  const dfs = (a, res) => {
    if (a <= 1 && res <= a) {
      return 1
    } else if (countPos(a, res) in dic) {
      return dic[countPos(a, res)]
    } else {
      let counter = 0
      for (let i = 0; i < a; i++) {
        if (!(i < res - 1 && a - i - 1 < res - 1)) {
          counter += dfs(i, 0) * dfs(a - i - 1, res - 1) + dfs(i, res - 1) * dfs(a - i - 1,
            0) - dfs(i, res - 1) * dfs(a - i - 1, res - 1);
        }
      }
      dic[countPos(a, res)] = counter;

      return counter
    }
  }
  return dfs(n, h);
}


module.exports.solution = solution;