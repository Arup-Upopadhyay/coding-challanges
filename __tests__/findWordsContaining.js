import findWordsContaining from "../dist/findWordsContaining";

describe("Test findWordsContaining", () => {
  test("test one", () => {
    const words = ["leet", "code"];
    const x = "e";
    const result = findWordsContaining(words, x);
    const expectedResult = [0, 1];
    expect(result).toEqual(expectedResult);
  });

  test("test two", () => {
    const words = ["abc", "bcd", "aaaa", "cbc"];
    const x = "a";
    const result = findWordsContaining(words, x);
    const expectedResult = [0, 2];
    expect(result).toEqual(expectedResult);
  });

  test("test three", () => {
    const words = ["abc", "bcd", "aaaa", "cbc"];
    const x = "z";
    const result = findWordsContaining(words, x);
    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });
});
