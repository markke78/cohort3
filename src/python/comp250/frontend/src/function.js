class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }

  increasePrice(amount) {
    if (amount > 0) this.price += amount;
    return this.price;
  }

  decreasePrice(amount) {
    if (amount > 0) this.price -= amount;
    return this.price;
  }
}

class Editor {
  constructor(items = []) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  clone(items) {
    return new Editor(items);
  }

  createItem(name, price) {
    if (name === "" && price === "") {
      return { message: "Please enter your infromation completely!" };
    }
    for (let b of this.items) {
      if (b.name === name) {
        return { message: "The Item is invailed" };
      }
    }
    const newItem = new Item(name, price);
    this.items.push(newItem);
    return this.items;
  }
}

export default Editor;
export { Item };
