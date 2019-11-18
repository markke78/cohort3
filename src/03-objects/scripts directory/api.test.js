import { City, Community } from "./city.js";
import {
  postData,
  getData,
  addData,
  clearData,
  deleteData,
  updateData
} from "./api.js";
import { tsExternalModuleReference } from "@babel/types";
global.fetch = require("node-fetch");

test("test addData", async () => {
  const city = new City(1, "Taipei", 123, 1234, 12345);

  let dataTest = await clearData();
  expect(dataTest.status).toEqual(200);
  // gets data from server
  dataTest = await getData();
  expect(dataTest.length).toBe(0);
  //addCity
  dataTest = await addData(city);
  expect(dataTest.status).toEqual(200);
  dataTest = await getData(); //gets data
  expect(dataTest.length).toBe(1);
  //updateCity
  expect(city.population).toBe(12345);
  city.population = 54321;
  dataTest = await updateData(city);
  expect(dataTest.status).toEqual(200);
  dataTest = await getData();
  expect(dataTest[0].population).toBe(54321);
  //deleteCity
  dataTest = await deleteData(1);
  expect(dataTest.status).toEqual(200);
  dataTest = await getData();
  expect(dataTest.length).toBe(0);

  // clears the server again
  await clearData();
});
