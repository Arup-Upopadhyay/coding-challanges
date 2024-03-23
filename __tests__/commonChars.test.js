import commonChars from "../dist/commonChars";

describe("Testing commonChars", () => {
  test("Sample One", () => {
    const words = ["bella", "label", "roller"];
    const result = commonChars(words);
    const expectedResult = ["e", "l", "l"];
    expect(result).toEqual(expectedResult);
  });
});
