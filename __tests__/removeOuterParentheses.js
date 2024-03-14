import removeOuterParentheses from "../dist/removeOuterParentheses";

describe("Test removeOuterParentheses", () => {
  test("first", () => {
    const ip = "(()())(())";
    const result = removeOuterParentheses(ip);
    const expectedResult = "()()()";
    expect(result).toEqual(expectedResult);
  });

  test("second", () => {
    const ip = "(()())(())(()(()))";
    const result = removeOuterParentheses(ip);
    const expectedResult = "()()()()(())";
    expect(result).toEqual(expectedResult);
  });

  test("third", () => {
    const ip = "()()";
    const result = removeOuterParentheses(ip);
    const expectedResult = "";
    expect(result).toEqual(expectedResult);
  });
});
