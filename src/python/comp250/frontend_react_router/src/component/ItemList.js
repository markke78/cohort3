import React, { useState, useRef, useEffect } from "react";
import Editor from "../function";
import ItemDiv from "./ItemDiv";
import "./item.css";
import { addItem, deleteItem, getData } from "./api";

const ItemList = () => {
  const [editor, setEditor] = useState(new Editor());
  const name = useRef(null);
  const amount = useRef(null);
  useEffect(() => {
    if (editor.items === null || editor.items.length === 0) {
      fetchData().then(function (resp) {
        if (resp.items.length > 0) {
          for (let b of resp.items) {
            editor.createItem(b.name, b.price);
          }
          console.log(resp);
          setEditor(cloneLinked(editor));
        }
      });
    }
  }, [editor]);

  const fetchData = async () => {
    const data = await getData();
    return data;
  };

  const createItem = (e) => {
    e.preventDefault();
    editor.createItem(name.current.value, amount.current.value);
    addItem(name.current.value, amount.current.value);
    setEditor(cloneLinked(editor));
  };

  const cloneLinked = (editor) => {
    //clone hold class instance, let react know something is different and have to update page
    var clone = Object.assign(
      Object.create(Object.getPrototypeOf(editor)),
      editor
    );
    return clone;
  };

  const handleRemoveItem = (name) => {
    editor.removeItem(name);
    deleteItem(name);
    setEditor(cloneLinked(editor));
  };
  const adjustPrice = (name) => {
    editor.setEditByName(name, true);
    setEditor(cloneLinked(editor));
  };

  const saveChange = (name, price) => {
    editor.adjustPrice(name, price);
    editor.setEditByName(name, false);
    setEditor(cloneLinked(editor));
  };

  return (
    <div>
      <h2>this is items list</h2>
      <div className="card">
        <form>
          <label>
            Item Name:
            <input type="text" name="name" ref={name} />
          </label>
          <label>
            Price:
            <input type="number" name="price" ref={amount} />
          </label>
          <button
            className="submit"
            onClick={(e) => {
              createItem(e);
            }}
          >
            Create Item
          </button>
        </form>
      </div>
      <div className="itemArea">
        {editor.items.map((item, key) => {
          return (
            <ItemDiv
              key={key}
              item={item}
              handleRemoveItem={() => handleRemoveItem(item.name)}
              adjustPrice={() => adjustPrice(item.name)}
              saveChange={saveChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
