function getCompleted(part, total) {
  const [ph, pm, ps] = part.split(':');
  const [th, tm, ts] = total.split(':');
  const a = 3600 * parseInt(ph) + 60 * parseInt(pm) + parseInt(ps);
  const b = 3600 * parseInt(th) + 60 * parseInt(tm) + parseInt(ts);
  
  const getGCD = (a, b) => {
    while (b != 0) {
      const m = a % b;
      a = b;
      b = m;
    }
    return a;
  }
  const gcd = getGCD(a, b);
  return (a / gcd) + '/' + (b / gcd)
}
