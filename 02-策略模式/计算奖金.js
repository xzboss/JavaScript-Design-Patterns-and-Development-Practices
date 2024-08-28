const strategies = {
  A: salary => salary * 3,
  B: salary => salary * 2,
  C: salary => salary * 1,
};
const getBonus = (level, salary) => {
  return strategies[level](salary);
};
console.log(getBonus('A', 1000)) // 3000
console.log(getBonus('B', 2000)) // 4000
