import shuffle from "../dist/shuffle";

describe("Test shuffle", () => {
  test("first test", () => {
    const nums = [2,5,1,3,4,7];
    const n = 3;
    const result = shuffle(nums,n)
    const expectedResult = [2,3,5,4,1,7];
    expect(result).toEqual(expectedResult);
  });

    test("first two", () => {
        const nums = [1,2,3,4,4,3,2,1];
        const n = 4;
        const result = shuffle(nums,n)
        const expectedResult = [1,4,2,3,3,2,4,1];
        expect(result).toEqual(expectedResult);
    });

    test("first three", () => {
        const nums = [1,1,2,2];
        const n = 2;
        const result = shuffle(nums,n)
        const expectedResult = [1,2,1,2];
        expect(result).toEqual(expectedResult);
    });

});
