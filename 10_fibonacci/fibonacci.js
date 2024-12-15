const fibonacci = function (n) {
  // Handle invalid inputs
  if (n < 1 || typeof n !== "number" || isNaN(n)) return "ERROR";

  // Initialize the first two Fibonacci numbers
  let a = 1,
    b = 1;

  // Use a loop to calculate the nth Fibonacci number
  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b; // Return the nth Fibonacci number
};

// Do not edit below this line
module.exports = fibonacci;
