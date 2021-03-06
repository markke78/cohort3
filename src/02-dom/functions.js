const functions = {

    
//1st exercise Add Item
    myItems: (items, apple) =>{
        apple.innerHTML = '';
        for (let b of items){
        let addItem = document.createElement("li");
        addItem.className="linux";
        addItem.textContent=b;
        apple.appendChild(addItem);
        }
    },
    
    plusItems: (items,intemsIndex) =>{
        items.push("Item "+intemsIndex);
        return items;
    },
    startItems: (items,intemsIndex) =>{
        items.unshift("Item "+intemsIndex);
        return items;
    },
    deleteItems: (items) =>{
        items.pop();
        return items;
    },

    
//2nd exercise Add Cards
    addCards: (node, counter) =>{
        let newDiv=functions.createListElement(counter);
        node.appendChild(newDiv);
        return newDiv;
    },

    addBefore:(counter,cn)=>{
        let newDiv=functions.createListElement(counter);
        cn.parentNode.insertBefore(newDiv,cn);
        return newDiv;
    },

    addAfter:(counter,cn)=>{
        let newDiv=functions.createListElement(counter);
        cn.parentNode.insertBefore(newDiv,cn.nextSibling);
        return newDiv;
    },
    
    deleteNode:(node)=>{
        node.remove();
        return node;
    },

    createListElement: (counter) =>{
        let newDiv = document.createElement('div');
        newDiv.className="card";
        newDiv.setAttribute('counter',counter);
        newDiv.textContent = `card # ${counter}`;
        
        let brk = document.createElement('br');
        newDiv.appendChild(brk);
        
        let addBefore = document.createElement('button');
        addBefore.className="addBefore";
        addBefore.textContent="addBefore";
        newDiv.appendChild(addBefore);

        let addAfter = document.createElement('button');
        addAfter.className="addAfter";
        addAfter.textContent="addAfter";
        newDiv.appendChild(addAfter);

        let brk1 = document.createElement('br');
        newDiv.appendChild(brk1);

        let deleteAdd = document.createElement('button');
        deleteAdd.className="delete";
        deleteAdd.textContent="Delete";
        newDiv.appendChild(deleteAdd);
        return newDiv;
    }

};

export default functions;