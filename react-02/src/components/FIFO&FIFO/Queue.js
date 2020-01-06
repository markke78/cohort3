import LinkedList from "../link/LinkList";

class Queue extends LinkedList {
  constructor() {
    super();
  }
  putIN(subject, amount) {
    this.last();
    this.insert(subject, amount);
  }
  takeOut() {
    this.first();
    this.delete();
    this.last();
  }
}

export default Queue;
