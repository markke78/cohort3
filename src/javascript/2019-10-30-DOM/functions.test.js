import functions from "./functions.js";
import { exportAllDeclaration } from "@babel/types";

test("check testing working", () => {
  console.log("Hello from functions.test");
  functions.helloWorld();
});

test("add card", () => {
  const div = functions.addCard();
  expect(div.getAttribute("count")).toEqual("1");
  expect(div.textContent).toEqual("card1 # 1");

  const div2 = functions.addCard();
  expect(div2.getAttribute("count")).toEqual("2");
  expect(div2.textContent).toEqual("card1 # 2");
});

test("test addCard1", () => {
  let myDiv = document.createElement("div");
  functions.cardCount = 0;
  expect(myDiv.childElementCount).toEqual(0);
  functions.addCard1(myDiv);
  expect(myDiv.childElementCount).toEqual(1);
  functions.addCard1(myDiv);
  expect(myDiv.childElementCount).toEqual(2);
  functions.addCard1(myDiv);
  expect(myDiv.childElementCount).toEqual(3);
  expect(myDiv.children[0].getAttribute("count")).toEqual("1");
});

test("test utilities threeCards", () => {
  let myDiv = utilities.giveThreeCards();
  expect(myDiv.childElementCount).toEqual(3);
  // let arrayChildren = Array.from(myDiv.children)
});

test("check utilites ARRAy three cards", () => {
  functions.cardCounter = 0;
  expect(utilityies.arrayChildren().length).toEqual(3);
});

test("check utilities array card Index", () => {
  functions.cardCounter = 0;
  utilityies.arrayCounter();
});

const utilities = {
  giveThreeCards: () => {
    let myDiv = document.createElement("div");
    functions.addCard1(myDiv);
    functions.addCard1(myDiv);
    functions.addCard1(myDiv);
    return myDiv;
  },

  arrayChildren: () => {
    threeCards();
    let threeCards = utilities.giveThreeCards();
    console.log(Array.from(threeCards.children));
    return Array.from(threeCards.children);
  },

  arrayCounter: () => {
    let arrayCounter = utilityies.arrayChildren();
    console.log(arrayCounter[0].getAttribute("count"));
  }
};
