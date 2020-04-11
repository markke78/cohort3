import React, { useState, useRef, useEffect } from "react";
import Editor from "../function";
import ItemDiv from "./ItemDiv";
import "./item.css";

const ItemList = () => {
  const [editor, setEditor] = useState(new Editor());
  const name = useRef(null);
  const amount = useRef(null);
  // useEffect(() => {
  //   if (!editor) {
  //     setEditor(new Editor());
  //   }
  //   setEditor(editor);
  // }, [editor]);

  const createItem = (e) => {
    e.preventDefault();
    editor.createItem(name.current.value, amount.current.value);
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
          return <ItemDiv key={key} name={item.name} price={item.price} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
