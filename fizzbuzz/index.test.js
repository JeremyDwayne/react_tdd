const fizzBuzz = require("./index");

describe("fizzBuzz", () => {
  it('returns "FizzBuss" for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it("returns the number for multiples of neither 3 nor 5", () => {
    expect(fizzBuzz(1)).toBe("1");
    expect(fizzBuzz(22)).toBe("22");
  });
});
