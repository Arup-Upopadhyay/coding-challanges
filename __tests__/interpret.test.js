import interpret from "../dist/interpret";

describe("Test interpret", () => {
  test("Sample one", () => {
    const command = "G()(al)";
    const result = interpret(command);
    const expectedResult = "Goal";
    expect(result).toEqual(expectedResult);
  });
});
