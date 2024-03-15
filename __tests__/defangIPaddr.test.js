import defangIPaddr from "../dist/defangIPaddr";

describe("Test Defanging an IP", () => {
  test("test one", () => {
    const address = '1.1.1.1';
    const result = defangIPaddr(address);
    const expectedResult = '1[.]1[.]1[.]1';
    expect(result).toEqual(expectedResult);
  }); 
    test("test two", () => {
    const address = '255.100.50.1';
    const result = defangIPaddr(address);
    const expectedResult = '255[.]100[.]50[.]1';
    expect(result).toEqual(expectedResult);
  });
});
