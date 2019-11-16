import { City, Community } from "./city.js";
import {
  postData,
  getData,
  addData,
  clearData,
  deleteData,
  updateData
} from "./api.js";
import { domCity } from "./dom.js";

var country = new Community();
var counter = 1;
window.onload = async event => {
  //clearData();
  let data = await getData();
  for (let b of data) {
    let newCity = country.createCity(
      b.name,
      b.key,
      b.latitude,
      b.longitude,
      b.population
    );
    domCity.createNewCard(cityList, counter++, newCity.newCity);
    topop.textContent = country.getPopulation();
    let mostNorth = country.getMostNorthern();
    northern.textContent = mostNorth.name + "  " + mostNorth.latitude;
    let mostSouth = country.getMostSouthern();
    southern.textContent = mostSouth.name + "  " + mostSouth.latitude;
    citySelect.innerHTML = country.addCityInInput();
  }
};

btn1.addEventListener("click", () => {
  let newCity = country.createCity(
    int1.value,
    0,
    int2.value,
    int3.value,
    int4.value
  );
  if (newCity.result == false) {
    alert(newCity.message);
    return;
  }
  addData(newCity.newCity);
  domCity.createNewCard(cityList, counter++, newCity.newCity);
  topop.textContent = country.getPopulation();
  let mostNorth = country.getMostNorthern();
  northern.textContent = mostNorth.name + "  " + mostNorth.latitude;
  let mostSouth = country.getMostSouthern();
  southern.textContent = mostSouth.name + "  " + mostSouth.latitude;
  citySelect.innerHTML = country.addCityInInput();
});

btn2.addEventListener("click", async () => {
  let balance = country.popOperator(
    citySelect.value,
    citySelect.options[citySelect.selectedIndex].getAttribute("key"),
    parseFloat(int5.value),
    "moveIn"
  );
  document.getElementById(
    citySelect.value +
      citySelect.options[citySelect.selectedIndex].getAttribute("key")
  ).textContent = "------Population:" + balance.population1();
  topop.textContent = country.getPopulation();
  updateData(balance);
});

btn3.addEventListener("click", () => {
  getData();
  let balance = country.popOperator(
    citySelect.value,
    citySelect.options[citySelect.selectedIndex].getAttribute("key"),
    parseFloat(int5.value),
    "moveOut"
  );
  document.getElementById(
    citySelect.value +
      citySelect.options[citySelect.selectedIndex].getAttribute("key")
  ).textContent = "------Population:" + balance.population1();
  topop.textContent = country.getPopulation();
  updateData(balance);
});

document.addEventListener("click", e => {
  if (e.target && e.target.className == "remove") {
    country.deleteCity(e.target.getAttribute("key"));
    // await country.deleteCity("Taipei");
    e.target.closest("div").remove();
    topop.textContent = country.getPopulation();
    citySelect.innerHTML = country.addCityInInput();
    deleteData(e.target.getAttribute("key"));
  }
});
