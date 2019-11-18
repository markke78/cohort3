import { domCity } from "./dom.js";
import { City } from "./city.js";
test("add card", () => {
  let div = document.createElement("div");
  let city = new City(1, "Calgary", 123, 1234, 12345);
  expect(domCity.createNewCard(div, 1, city).childElementCount).toBe(3);
  expect(div.children[0].className).toBe("city odd");
  expect(div.children[0].getAttribute("counter")).toBe("1");
  expect(div.children[0].textContent).toBe(
    "City 1:Calgary------Latitude:123------Longtidue:1234------Population:12345------Status: TownRemove"
  );
});
