import maxWidthOfVerticalArea from "../dist/maxWidthOfVerticalArea";

describe("Testing maxWidthOfVerticalArea", () => {
    test("test one", () => {
        const points = [[8,7],[9,9],[7,4],[9,7]];
        const result = maxWidthOfVerticalArea(points);
        const expectedResult = 1;
        expect(result).toEqual(expectedResult);
    });

    test("test two", () => {
        const points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]];
        const result = maxWidthOfVerticalArea(points);
        const expectedResult = 3;
        expect(result).toEqual(expectedResult);
  });
});
