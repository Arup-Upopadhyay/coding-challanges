import numJewelsInStones from "../dist/JewelsInStones";

describe("TEST", () => {
  test("test one", () => {
    const jewels = "aA";
    const stones = "aAAbbbb";
    const result = numJewelsInStones(jewels, stones);
    const expectedResult = 3;
    expect(result).toEqual(expectedResult);
  });

  test("test two", () => {
    const jewels = "z";
    const stones = "ZZ";
    const result = numJewelsInStones(jewels, stones);
    const expectedResult = 0;
    expect(result).toEqual(expectedResult);
  });
});
