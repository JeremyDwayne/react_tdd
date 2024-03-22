const palindrome = require("./palindromes");

const { prepareStr, isPalindrome } = palindrome;

describe("prepareStr()", () => {
  it("converts the given string to lowercase", () => {
    expect(prepareStr("aAaA")).toBe("aaaa");
  });

  it("removes all non-letter characters", () => {
    expect(prepareStr("To infinity, and beyond!")).toBe("toinfinityandbeyond");
  });
});

describe("isPalindrome()", () => {
  it("correctly identifies one-word palindromes", () => {
    expect(isPalindrome("madam")).toEqual(["madam"]);
    expect(isPalindrome("racecar")).toEqual(["racecar"]);
  });

  it("returns an empty array when given no palindromes", () => {
    expect(isPalindrome("tic tac toe")).toEqual([]);
  });

  it("ignores casing", () => {
    expect(isPalindrome("WoW")).toEqual(["wow"]);
  });

  it("detects multi-word palindromes", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toEqual([
      "amanaplanacanalpanama",
    ]);
  });
});
