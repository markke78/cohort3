import React, { useState } from "react";
import Editor from "./function";
import ItemDiv from "./ItemDiv";

const ItemForm = ({ createItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    createItem(name, price);
    setName("");
    setPrice("");
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Item Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button> Create Item</button>
    </form>
  );
};

const ItemList = () => {
  const [editor, setEditor] = useState(new Editor());
  const createItem = (name, price) => {
    const newEditor = new Editor(editor.items);
    newEditor.createItem(name, price);
    setEditor(newEditor);
  };
  return (
    <div>
      <h2>this is items list</h2>
      <div>
        <ItemForm createItem={createItem} />
        {editor.items.map((item) => {
          return <ItemDiv name={item.name} price={item.price} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
