const sumAll = function (start, end) {
  // Handle cases where inputs are invalid or negative
  if (
    start < 0 ||
    end < 0 ||
    typeof start !== "number" ||
    typeof end !== "number"
  ) {
    return "ERROR";
  }

  // Ensure the smaller number is always `start` and the larger is `end`
  const min = Math.min(start, end);
  const max = Math.max(start, end);

  // Initialize sum variable
  let sum = 0;

  // Loop through numbers from min to max and add to sum
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
