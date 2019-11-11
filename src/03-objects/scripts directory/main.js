import { City, Community } from "./city.js";

var country = new Community();
var counter = 1;
btn1.addEventListener("click", async () => {
  let newCity = country.createCity(
    int1.value,
    int2.value,
    int3.value,
    int4.value
  );
  country.createNewCard(cityList, counter++, newCity);
  topop.textContent = await country.getPopulation();
  let mostNorth = await country.getMostNorthern();
  northern.textContent = mostNorth.name + "  " + mostNorth.latitude;
  let mostSouth = await country.getMostSouthern();
  southern.textContent = mostSouth.name + "  " + mostSouth.latitude;
});
