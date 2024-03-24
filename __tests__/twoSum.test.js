import twoSum from "../dist/twoSum";

describe("Test twoSum", () => {
  test("Sample One", () => {
    const nums = [2,7,11,15];
    const target = 9;
    const result = twoSum(nums,target);
    const expectedResult = [1,0];
    expect(result).toEqual(expectedResult);
  });
});
