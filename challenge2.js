function countHours(year, holidays) {
  return holidays.filter(
    holiday => new Date(year + '-' + holiday).getDay() % 6
  ).length << 1;
}
