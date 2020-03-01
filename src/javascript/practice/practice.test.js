import functions from "./practice";

test("test sort", () => {
  expect(functions.theSort(["March", "Jan", "Feb", "Dec"])).toEqual([
    "Dec",
    "Feb",
    "Jan",
    "March"
  ]);
});

test("test compare sort", () => {
  expect(functions.compareSort([4, 2, 5, 1, 3])).toEqual([1, 2, 3, 4, 5]);
});

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];
test("test mulSort", () => {
  expect(functions.mulSort(items)).toEqual([
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "Zeros", value: 37 },
    { name: "And", value: 45 }
  ]);
});
test("test sort by name", () => {
  expect(functions.sortByName(items)).toEqual([
    { name: "And", value: 45 },
    { name: "Edward", value: 21 },
    { name: "Magnetic", value: 13 },
    { name: "Sharpe", value: 37 },
    { name: "The", value: -12 },
    { name: "Zeros", value: 37 }
  ]);
});

test("test noRepeart", () => {
  expect(functions.noRepeat("aabbccddeeeee")).toBe();
});
