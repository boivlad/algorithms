module.exports.solution = (n, d, b, a) => {
  d++;
  let t = 0;
  let g = [0];
  for (let i = 0; i < n; i++) {
    t += a[i];
    g[i + 1] = t;
  }
  let max = 0;
  for (let i = 0; i < (n / 2); i++) {
    let x1 = g[Math.min(n, i * d)];
    let x2 = (g[n] - g[Math.max(0, n - i * d)]);
    let result = i - Math.floor(Math.min(x1, x2) / b)
    max = (result < max) ? max : result;
  }
  return max;
}