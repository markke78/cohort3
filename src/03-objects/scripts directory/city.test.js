import { City, Community } from "./city.js";

test("check class city working", () => {
  let m = new City(1, "Calgary", 51.049999, -114.066666, 1392609);
  expect(m.show()).toEqual("Calgary 51.049999 -114.066666 1392609");
});

test("test movedIn working", () => {
  let m = new City(1, "Calgary", 51.049999, -114.066666, 1392609);
  expect(m.movedIn(500)).toBe(1393109);
});

test("test movedOut working", () => {
  let m = new City(1, "Calgary", 51.049999, -114.066666, 1392609);
  expect(m.movedOut(500)).toBe(1392109);
});

test("test howbig working", () => {
  let m = new City(1, "Calgary", 51.049999, -114.066666, 1392609);
  expect(m.howBig()).toBe("City");
});

test("test whichSphere working", () => {
  let m = new City(1, "Calgary", 51.049999, -114.066666, 1392609);
  expect(m.whichSphere()).toBe("Northern Hemipnere");
});

test("test community create city", () => {
  const community = new Community("community");
  expect(
    community.createCity("Taipei", 0, 25.105497, 121.597366, 2500000).newCity
      .name
  ).toEqual("Taipei");
});

test("test delete city working", () => {
  const community = new Community("community");
  community.createCity("Taipei", 0, 25.105497, 121.597366, 2500000);
  community.createCity("Calgary", 0, 51.049999, -114.066666, 1392609);
  expect(community.communityCities.length).toBe(2);
  community.deleteCity("1");
  expect(community.communityCities.length).toBe(1);
});

test("test most northern working", () => {
  const community = new Community("community");
  community.createCity("Taipei", 0, 25.105497, 121.597366, 2500000);
  community.createCity("Calgary", 0, 51.049999, -114.066666, 1392609);

  expect(community.getMostNorthern()).toEqual({
    latitude: 51.049999,
    name: "Calgary"
  });
});

test("test most southern working", () => {
  const community = new Community("community");
  community.createCity("Taipei", 0, 25.105497, 121.597366, 2500000);
  community.createCity("Calgary", 0, 51.049999, -114.066666, 1392609);
  expect(community.getMostSouthern()).toEqual({
    latitude: 25.105497,
    name: "Taipei"
  });
});

test("test getspopulation", () => {
  const community = new Community("community");
  community.createCity("Taipei", 0, 25.105497, 121.597366, 2500000);
  community.createCity("Calgary", 0, 51.049999, -114.066666, 1392609);
  expect(community.getPopulation()).toBe(3892609);
});

test("test popOperator working", () => {
  const community = new Community("community");
  community.createCity("Taipei", 0, 25.105497, 121.597366, 2500000);
  expect(community.popOperator("Taipei", 1, 500, "moveIn").population).toBe(
    2500500
  );
  expect(community.popOperator("Taipei", 1, 500, "moveOut").population).toBe(
    2500000
  );
});

test("test addCityInInput working", () => {
  const community = new Community("community");
  community.createCity("Taipei", 0, 25.105497, 121.597366, 2500000);
  expect(community.addCityInInput()).toEqual(
    "<option value='Taipei' key='1'> Taipei 1</option>"
  );
});

test("test 130E working", () => {
  let a = new City(1, "Calgary", 51.049999, -114.066666, 1392609);
  let b = a;
  b.population = 500;
  expect(a.population).toBe(500);
  expect(b.population).toBe(500);
});

// test("test API with city class", () => {
//   var url = "http://localhost:5000/add";
//   const community = new Community("community");
//   community.createCity("Taipei", 25.105497, 121.597366, 2500000);
//   community.createCity("Calgary", 51.049999, -114.066666, 1392609);
// });
