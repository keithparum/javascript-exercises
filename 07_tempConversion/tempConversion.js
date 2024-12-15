const convertToCelsius = function (fahrenheit) {
  // Formula: (F - 32) * 5/9
  let celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10; // Round to 1 decimal place
};

const convertToFahrenheit = function (celsius) {
  // Formula: (C * 9/5) + 32
  let fahrenheit = celsius * (9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10; // Round to 1 decimal place
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
