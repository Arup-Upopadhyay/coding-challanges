import countMatches from "../dist/countMatches";

describe("Testing countMatches", () => {
  test("Sample one", () => {
    const items = [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ];
    const ruleKey = "color";
    const ruleValue = "silver";
    const result = countMatches(items, ruleKey, ruleValue);
    const expectedResult = 1;
    expect(result).toEqual(expectedResult);
  });

  test("Sample Two", () => {
    const items = [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ];
    const ruleKey = "type";
    const ruleValue = "phone";
    const result = countMatches(items, ruleKey, ruleValue);
    const expectedResult = 2;
    expect(result).toEqual(expectedResult);
  });
});
