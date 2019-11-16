const domCity = {
  createNewCard: (node, counter, newCity) => {
    let newDiv = document.createElement("div");
    newDiv.className = `city ${
      parseFloat(newCity.key) % 2 == 0 ? "even" : "odd"
    }`;

    newDiv.id = newCity.name1() + newCity.key + "div";
    newDiv.setAttribute("counter", counter);
    let newLabel = document.createElement("label");
    newLabel.id = newCity.name1() + newCity.key;
    newLabel.textContent = `------Population:${newCity.population1()}`;
    newDiv.textContent = `City ${counter}:${newCity.name1()}------Latitude:${newCity.latitude1()}------Longtidue:${newCity.longitude1()}`;
    newDiv.appendChild(newLabel);
    let newBtn = document.createElement("button");
    newBtn.className = "remove";
    newBtn.textContent = "Remove";
    newBtn.setAttribute("key", newCity.key);
    newDiv.appendChild(newBtn);
    node.appendChild(newDiv);
    return newDiv;
  }
};

export { domCity };
