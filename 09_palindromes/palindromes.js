const palindromes = function (str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Check if the cleaned string is equal to the reversed string
  return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
