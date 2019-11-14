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
  citySelect.innerHTML = await country.addCityInInput();
});

btn2.addEventListener("click", async () => {
  let balance = await country.popOperator(
    citySelect.value,
    parseFloat(int5.value),
    "moveIn"
  );
  document.getElementById(
    citySelect.value +
      citySelect.options[citySelect.selectedIndex].getAttribute("key")
  ).textContent = "------Population:" + balance;
  topop.textContent = await country.getPopulation();
});

btn3.addEventListener("click", async () => {
  let balance = await country.popOperator(
    citySelect.value,
    parseFloat(int5.value),
    "moveOut"
  );
  document.getElementById(
    citySelect.value +
      citySelect.options[citySelect.selectedIndex].getAttribute("key")
  ).textContent = "------Population:" + balance;
  topop.textContent = await country.getPopulation();
});

document.addEventListener("click", async e => {
  if (e.target && e.target.className == "remove") {
    await country.deleteCity(e.target.getAttribute("key"));
    // await country.deleteCity("Taipei");
    e.target.closest("div").remove();
    topop.textContent = await country.getPopulation();
    citySelect.innerHTML = await country.addCityInInput();
  }
});
