import functions from "./functions.js";

//1st exercise Add Item
var items = [];
var intemsIndex = items.length + 1;
dom1.addEventListener("click", () => {
  functions.myItems(items, apple);
});

dom2.addEventListener("click", () => {
  items = functions.plusItems(items, intemsIndex);
  intemsIndex++;
});

dom3.addEventListener("click", () => {
  items = functions.startItems(items, intemsIndex);
  intemsIndex++;
});

dom4.addEventListener("click", () => {
  items = functions.deleteItems(items);
});

//2nd exercise Add Cards
var counter = 1;
ac1.addEventListener("click", () => {
  functions.addCards(more, counter++);
});

document.addEventListener("click", e => {
  if (e.target && e.target.className == "addBefore") {
    functions.addBefore(counter++, e.target.closest(".card"));
  }
  if (e.target && e.target.className == "addAfter") {
    functions.addAfter(counter++, e.target.closest(".card"));
  }
  if (e.target && e.target.className == "delete") {
    functions.deleteNode(e.target.closest(".card"));
  }
});
