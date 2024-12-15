const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, num) => total + num, 0); // Add all elements in the array
};

const multiply = function (array) {
  return array.reduce((product, num) => product * num, 1); // Multiply all elements in the array
};

const power = function (base, exponent) {
  return Math.pow(base, exponent); // Base raised to the power of exponent
};

const factorial = function (n) {
  if (n === 0 || n === 1) return 1; // Factorial of 0 and 1 is 1
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; // Multiply numbers from 2 to n
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
