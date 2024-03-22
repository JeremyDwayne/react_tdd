const isPalindrome = (str) => {
  str = prepareStr(str);
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return [];
    }
  }
  return [str];
};

const prepareStr = (str) => {
  return str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
};

const palindromes = () => {};
palindromes.prepareStr = prepareStr;
palindromes.isPalindrome = isPalindrome;
module.exports = palindromes;
