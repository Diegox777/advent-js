function getOptimalPath(path) {
  path = path.reverse();
  const n = path.length;
  [...Array(n)]
    .map((_, idx) => idx)
    .filter(idx => idx !== 0)
    .forEach((i, _) => {
      [...Array(n - i)].forEach((val2, j) => {
        path[i][j] = path[i][j] + Math.min(path[i - 1][j], path[i - 1][j + 1])
      });
  });
  return path[n - 1][0];
}
