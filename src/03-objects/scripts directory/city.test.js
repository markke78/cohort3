import { City } from "./city.js";

test("check class city working", () => {
  let m = new City("Calgary", "51.049999", "-114.066666", "1,392,609");
  expect(m.show()).toEqual("Calgary 51.049999 -114.066666 1,392,609");
});

test("test movedIn working", () => {
  let m = new City("Calgary", 51.049999, -114.066666, 1392609);
  expect(m.movedIn(500)).toBe(1393109);
});

test("test movedOut working", () => {
  let m = new City("Calgary", 51.049999, -114.066666, 1392609);
  expect(m.movedOut(500)).toBe(1392109);
});

test("test howbig working", () => {
  let m = new City("Calgary", 51.049999, -114.066666, 1392609);
  expect(m.howBig()).toBe("City");
});

test("test whichSphere working", () => {
  let m = new City("Calgary", 51.049999, -114.066666, 1392609);
  expect(m.whichSphere()).toBe("Northern Hemipnere");
});
