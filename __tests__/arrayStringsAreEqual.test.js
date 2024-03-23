import arrayStringsAreEqual from "../dist/arrayStringsAreEqual";

describe("Testing arrayStringsAreEqual", () => {
  test("Sample One", () => {
    const word1 = ["ab", "c"];
    const word2 = ["a", "bc"];
    const result = arrayStringsAreEqual(word1, word2);
    const expectedResult = true;
    expect(result).toEqual(expectedResult);
  });

  test("Sample Two", () => {
    const word1 = ["abc", "d", "defg"];
    const word2 = ["abcddefg"];
    const result = arrayStringsAreEqual(word1, word2);
    const expectedResult = true;
    expect(result).toEqual(expectedResult);
  });
});
