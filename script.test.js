describe("#filterOutOdds", () => {
  it("should only put even numbers into new array", () => {
    expect(filterOutOdds(1, 2, 3, 4)).toEqual([2, 4]);
  });
});

describe("#findMin", () => {
  it("should find the minimum value", () => {
    expect(findMin(20, 14, 98, 7, 67)).toEqual(7);
  });
});

describe("#mergeObjects", () => {
  it("should take two objects and create a new object with all the keys and values of the two objects", () => {
    expect(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    });
  });
});

describe("#doubleAndReturnArgs", () => {
  it("should create a new array with the values of the array and the values of the arguments doubled", () => {
    expect(doubleAndReturnArgs([2, 4], 6, 8, 10)).toEqual([2, 4, 12, 16, 20]);
  });
});

describe("#extend", () => {
  it("should create a new array with every value from both arrays", () => {
    expect(extend([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
});
