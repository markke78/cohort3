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
    counter: 1,
    addBreak:()=>{
        let br=document.createElement("br");
        return br;
    },

    createListEletment :(counter) =>{
        let newDiv = document.createElement('div');
        newDiv.className="card";
        newDiv.setAttribute('counter',counter);
        newDiv.textContent = `card # ${counter}`;
        return newDiv;
    },

    createButtons: (newDiv) => {
       
        newDiv.appendChild(functions.addBreak());
        
        let addBefore = document.createElement('button');
        addBefore.className="addBefore";
        addBefore.textContent="addBefore";
        newDiv.appendChild(addBefore);

        let addAfter = document.createElement('button');
        addAfter.className="addAfter";
        addAfter.textContent="addAfter";
        newDiv.appendChild(addAfter);

        newDiv.appendChild(functions.addBreak());

        let deleteAdd = document.createElement('button');
        deleteAdd.className="delete";
        deleteAdd.textContent="Delete";
        newDiv.appendChild(deleteAdd);
     },

    addCards: (node, counter) =>{
        let newDiv = functions.createListEletment(counter);
        node.appendChild(newDiv);
        functions.createButtons(newDiv);
        
    },
    addBefore:(counter,cn)=>{
        let newDiv = functions.createListEletment(counter);
        cn.parentNode.insertBefore(newDiv,cn);
        functions.createButtons(newDiv);
        },

    addAfter:(counter,cn)=>{
        let newDiv = functions.createListEletment(counter);
        cn.parentNode.appendChild(newDiv);
        functions.createButtons(newDiv);
    },

    deleteNode:(node)=>{
        node.remove();
    }

}
export default functions;