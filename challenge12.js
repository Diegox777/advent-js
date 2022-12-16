function selectSleigh(distance, sleighs) {
  let ans = sleighs.reverse().find(item => distance * item.consumption <= 20);
  return ans === undefined ? null : ans.name;  
}
