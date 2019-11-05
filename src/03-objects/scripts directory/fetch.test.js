import functions from "./fetch.js";

const data = [
  { name: "Ariana", surname: "Firulescu", gender: "female", region: "Romania" },
  { name: "Pabitra", surname: "Bashyal", gender: "female", region: "Nepal" },
  { name: "Gazmir", surname: "Dushku", gender: "male", region: "Albania" },
  { name: "Edgar", surname: "Brașoveanu", gender: "male", region: "Romania" },
  { name: "Rózsás", surname: "Linda", gender: "female", region: "Hungary" },
  { name: "Sabina", surname: "Proca", gender: "female", region: "Romania" },
  { name: "Binisha", surname: "Sherbuja", gender: "female", region: "Nepal" },
  { name: "Гена", surname: "Зимин", gender: "male", region: "Russia" },
  { name: "Điền", surname: "Hồng", gender: "female", region: "Vietnam" },
  { name: "Ηγησίας", surname: "Λύκος", gender: "male", region: "Greece" }
];

test("test to get firstname", () => {
  expect(functions.getFirstName(data)).toBe("Ariana");
  expect(functions.getAllFirstName(data)[0]).toBe("Ariana");
});
