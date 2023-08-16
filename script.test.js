describe("#filterOutOdds", () => {
  it("should only put even numbers into new array", () => {
    expect(filterOutOdds(1, 2, 3, 4)).toEqual([2, 4]);
  });
});
