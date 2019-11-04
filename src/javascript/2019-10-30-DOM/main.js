import functions from "./functions.js";

idPm.addEventListener("click", () => {
  functions.helloWorld();
});

let counter = 0;
idBigDiv.addEventListener("click", e => {
  let newDiv = document.createElement("div");
  newDiv.className = "test";
  newDiv.setAttribute("counter", counter++);
  newDiv.textContent = `card # ${counter}`;
  idBigDiv.appendChild(newDiv);
  let current = event.target;
  idBigDiv.insertBefore(newDiv, current);
});

idNd.addEventListener("click", () => {
  let newDiv = document.createElement("div");
  newDiv.className = "test";
  newDiv.setAttribute("counter", counter++);
  newDiv.textContent = `card # ${counter}`;
  idBigDiv.appendChild(newDiv);
});

idCd.addEventListener("click", () => {
  functions.addCard(out1);
});
