class ListNode {
  constructor(subject, amount) {
    this.forwardNode = null;
    this.subject = subject;
    this.amount = amount;
  }
}

class LinkedList {
  constructor() {
    this.flag = null;
    this.head = null;
  }
  insert(subject, amount) {
    if (this.flag === null) {
      this.flag = new ListNode(subject, amount);
      this.head = this.flag;
    } else if (this.flag.forwardNode === null) {
      this.flag.forwardNode = new ListNode(subject, amount);
      this.flag = this.flag.forwardNode; //now, the flag is chaged to new node
    } else {
      let newNode = new ListNode(subject, amount);
      newNode.forwardNode = this.flag.forwardNode;
      this.flag.forwardNode = newNode;
    }
  }

  first() {
    this.flag = this.head;
  }

  last() {
    if (this.flag === null) return;
    while (this.flag.forwardNode !== null) {
      this.flag = this.flag.forwardNode;
    }
  }

  next() {
    if (this.flag === null || this.flag.forwardNode === null) return;
    this.flag = this.flag.forwardNode;
  }

  previous() {
    if (this.flag === this.head || this.flag === null) return;
    let seekingNode = this.head;
    while (this.flag !== seekingNode.forwardNode) {
      seekingNode = seekingNode.forwardNode;
    }
    this.flag = seekingNode;
  }

  delete() {
    if (this.flag === null) return;
    if (this.flag === this.head) {
      if (this.flag.forwardNode !== null) {
        this.flag = this.flag.forwardNode;
        this.head = this.flag;
      } else {
        this.flag = null;
        this.head = null;
      }
      return;
    }
    let seekingNode = this.head;
    while (this.flag !== seekingNode.forwardNode) {
      seekingNode = seekingNode.forwardNode;
    }
    if (this.flag.forwardNode === null) {
      this.flag = seekingNode;
      this.flag.forwardNode = null;
    } else {
      let next = this.flag.forwardNode;
      this.flag = seekingNode;
      this.flag.forwardNode = next;
      this.flag = this.flag.forwardNode;
    }
  }

  getTotal() {
    return this.sumAmount(this.head);
  }

  sumAmount(flag) {
    if (flag.forwardNode === null) {
      return flag.amount;
    } else {
      return this.sumAmount(flag.forwardNode) + flag.amount;
    }
  }

  *value() {
    let current = this.head;
    while (current !== null) {
      yield current;
      current = current.forwardNode;
    }
  }
  [Symbol.iterator]() {
    return this.value();
  }
}

export default LinkedList;
