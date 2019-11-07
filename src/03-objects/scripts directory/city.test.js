import { City, Community } from "./city.js";

test("check class city working", () => {
  let m = new City("Calgary", 51.049999, -114.066666, 1392609);
  expect(m.show()).toEqual("Calgary 51.049999 -114.066666 1392609");
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

test("test community create city", () => {
  const community = new Community("community");
  community.createCity("Taipei", 25.105497, 121.597366, 2500000);
  console.log(community);
  expect(community.communityCities[0].name).toBe("Taipei");
});

test("test delet city working", () => {
  const community = new Community("community");
  community.createCity("Taipei", 25.105497, 121.597366, 2500000);
  community.createCity("Calgary", 51.049999, -114.066666, 1392609);
  expect(community.communityCities.length).toBe(2);
  console.log(community);
  community.deleteCity("calgay");
  console.log(community);
  expect(community.communityCities.length).toBe(2);
});
