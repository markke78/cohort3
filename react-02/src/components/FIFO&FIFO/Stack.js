import LinkedList from "../link/LinkList";

class Stack extends LinkedList {
  constructor() {
    super();
  }
  putIN(subject, amount) {
    this.last();
    this.insert(subject, amount);
  }
  takeOut() {
    this.last();
    this.delete();
  }
}

export default Stack;
