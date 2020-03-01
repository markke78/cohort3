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
