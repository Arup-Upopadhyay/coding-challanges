import finalValueAfterOperations from "../dist/finalValueAfterOperations";

describe("Testing finalValueAfterOperations", () => {
  test("Sample One", () => {
    const operations = ["--X", "X++", "X++"];
    const result = finalValueAfterOperations(operations);
    const expectedResult = 1;
    expect(result).toEqual(expectedResult);
  });
});
