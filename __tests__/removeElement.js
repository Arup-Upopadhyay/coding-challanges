import removeElement from "../dist/removeElement";

describe("TEST", () => {
  test("test one", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const result = removeElement(nums, val);
    const expectedResult = 2;
    expect(result).toEqual(expectedResult);
  });
});
