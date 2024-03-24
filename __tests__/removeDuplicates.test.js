import removeDuplicates from "../dist/removeDuplicates";

describe("Testing removeDuplicates", () => {
  test("Sample one", () => {
    const nums = [1, 1, 2];
    const result = removeDuplicates(nums);
    const expectedResult = 2;
    expect(result).toEqual(expectedResult);
  });
});
