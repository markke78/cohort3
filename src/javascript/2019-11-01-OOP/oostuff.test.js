import { functions, Person } from "./oostuff.js";

test("check testing working", () => {
  console.log("Hello from oostuff");
  functions.helloWorld();
});
test("test class working", () => {
  let l = new Person("Larry", 5);
  let d = new Person("Dean", 29);
  expect(l.getName()).toBe("Larry");
  expect(l.getAge()).toBe(5);
  l.getBirthday();
  expect(l.getAge()).toBe(6);
});
