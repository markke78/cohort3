import { returnStatement } from "@babel/types";

const functions = {
  helloWorld: () => {
    console.log("Hello from functions.test");
  },

  cardCount: 0,

  addCard: () => {
    let newDiv = document.createElement("div");
    functions.cardCount = functions.cardCount + 1;
    newDiv.className = "test";
    newDiv.setAttribute("count", functions.cardCount);
    newDiv.textContent = `card1 # ${functions.cardCount}`;
    // test.appendChild(newDiv);
    return newDiv;
  },

  addCard1: parent => {
    parent.appendChild(functions.addCard());
    return;
  }

  //   addBefore: (curreCard) =>{
  //     return;
  //   }

  // addDiv: (node, counter)=>{
  //     let newDiv = document.createElement('div');
  //     newDiv.className="card1";
  //     newDiv.setAttribute('counter',counter),
  //     newDiv.textContent = `card1 # ${counter}`;
  //     node.appendChild(newDiv);
  // }
};
export default functions;
