function getCompleted(part, total) {
  const [ph, pm, ps] = part.split(':');
  const [th, tm, ts] = total.split(':');
  const a = 3600 * parseInt(ph) + 60 * parseInt(pm) + parseInt(ps);
  const b = 3600 * parseInt(th) + 60 * parseInt(tm) + parseInt(ts);
  
  const getGCD = (a, b) => {
    let A = [];
    [...Array(5)].forEach((v, i) => {
      const m = a % b;
      a = b;
      b = m;
      A.push(a);
    });
    return A[A.findIndex(e => e == 0) - 1];
  }
  const gcd = getGCD(a, b);
  return (a / gcd) + '/' + (b / gcd)
}
