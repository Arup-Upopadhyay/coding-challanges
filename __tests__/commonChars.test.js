import commonChars from "../dist/commonChars";

describe("TEST", () => {
  test("test one", () => {
    const words = ["bella", "label", "roller"];
    const result = commonChars(words);
    const expectedResult = ["e", "l", "l"];
    expect(result).toEqual(expectedResult);
  });
});
