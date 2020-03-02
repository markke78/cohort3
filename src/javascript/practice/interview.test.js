import functions from "./interview";

test("sort test", () => {
  expect(functions.reverse("apple")).toBe("elppa");
  expect(functions.reverse("hello")).toBe("olleh");
});

test("palindrome", () => {
  expect(functions.palindrome("apple")).toBe(false);
});

test("palindrome", () => {
  expect(functions.palindrome("abcba")).toBe(true);
});

test("reverseInt", () => {
  expect(functions.reverseInt(51)).toBe(15);
  expect(functions.reverseInt(200)).toBe(2);
  expect(functions.reverseInt(-15)).toBe(-51);
  expect(functions.reverseInt(-90)).toBe(-9);
});

test("fizzBuzz", () => {
  expect(
    functions.fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  ).toEqual([
    1,
    2,
    "fizz",
    4,
    "Buzz",
    "fizz",
    7,
    8,
    "fizz",
    "Buzz",
    11,
    "fizz",
    13,
    14,
    "fizzBuzz"
  ]);
});

test("chunk", () => {
  expect(functions.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});
