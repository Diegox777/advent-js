function getGiftsToRefill(a1, a2, a3) {
  const foo = {};
  a1.forEach(x => {
    foo[x] |= (1 << 0);
  });
  a2.forEach(x => {
    foo[x] |= (1 << 1);
  });
  a3.forEach(x => {
    foo[x] |= (1 << 2);
  });
  return Object.keys(foo)
    .filter(key => ((foo[key] & (foo[key] - 1)) === 0));
}
