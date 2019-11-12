import { City, Community } from "./city.js";
import { postData } from "./fetch.js";

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
    community.createCity("Taipei", 25.105497, 121.597366, 2500000).name
  ).toBe("Taipei");
  document.getElementById().textContent = "Your Balance: $" + balance;
});

test("test delete city working", () => {
  const community = new Community("community");
  community.createCity("Taipei", 25.105497, 121.597366, 2500000);
  community.createCity("Calgary", 51.049999, -114.066666, 1392609);
  community.getDataFromServer().then(data => {
    expect(data.length).toBe(2);
    community.deleteCity("Calgary").then(data => {
      expect(data.length).toBe(1);
    });
  });
});

test("test most northern working", () => {
  const community = new Community("community");
  community.createCity("Taipei", 25.105497, 121.597366, 2500000);
  community.createCity("Calgary", 51.049999, -114.066666, 1392609);
  community.getMostNorthern().then(data => {
    expect(data).toEqual({ latitude: 51.049999, name: "Calgary" });
  });
});

test("test most southern working", () => {
  const community = new Community("community");
  community.createCity("Taipei", 25.105497, 121.597366, 2500000);
  community.createCity("Calgary", 51.049999, -114.066666, 1392609);
  community.getMostSouthern().then(data => {
    expect(data).toEqual(["Taipei", 25.105497]);
  });
});

// test("test getspopulation", () => {
//   const community = new Community("community");
//   community.createCity("Taipei", 25.105497, 121.597366, 2500000);
//   community.createCity("Calgary", 51.049999, -114.066666, 1392609);
//   // expect(community.getPopulation()).toBe(3892609);
//   community.getPopulation().then(data => {
//     expect(data).toBe(3892609);
//   });
// });

// test("test popOperator working", () => {
//   const community = new Community("community");
//   community.createCity("Taipei", 25.105497, 121.597366, 2500000);
//   community.popOperator("Taipei", 500, "moveIn").then(data => {
//     expect(data).toBe(2502000);
//   });
// });

test("test API with city class", () => {
  var url = "http://localhost:5000/add";
  const community = new Community("community");
  community.createCity("Taipei", 25.105497, 121.597366, 2500000);
  community.createCity("Calgary", 51.049999, -114.066666, 1392609);
});
