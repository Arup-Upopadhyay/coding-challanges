import threeSum from "../dist/threeSum";

describe("Test threeSum", () => {
  test("Sample One", () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(nums);
    const expectedResult = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    expect(result).toEqual(expectedResult);
  });

  test("Sample Two", () => {
    const nums = [0, 1, 1];
    const result = threeSum(nums);
    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });

  test("Sample Three", () => {
    const nums = [0, 0, 0];
    const result = threeSum(nums);
    const expectedResult = [[0, 0, 0]];
    expect(result).toEqual(expectedResult);
  });
});
