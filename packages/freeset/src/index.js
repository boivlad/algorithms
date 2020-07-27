module.exports.MFS = (n, k, l) => {
  const lSort = l.sort((a, b) => a - b);
  const S = [];
  for (let i = 0; i < n; i++) {
    if ((lSort[i] % k === 0 && !S.includes(lSort[i] / k)) || lSort[i] % k !== 0)
      S.push(lSort[i]);
  }
  return S.length;
}