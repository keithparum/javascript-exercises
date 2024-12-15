const reverseString = function (string) {
  let reversed = "";
  for (i = string.length - 1; i > -1; i--) {
    reversed += string[i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
