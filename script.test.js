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
