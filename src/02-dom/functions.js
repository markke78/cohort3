const functions = {
    myItems: (yahoo, google) =>{
        google.innerHTML = '';
        for (let b of yahoo){
        let addItem = document.createElement("li");
        addItem.className="linux";
        addItem.textContent=b ;
        google.appendChild(addItem);
        }
    },
    
    plusItems: (sina,index) =>{
        sina.push("Item "+index);
        return sina;
    },
    startItems: (sina,index) =>{
        sina.unshift("Item "+index);
        return sina;
    },
    deleteItems: (sina) =>{
        sina.pop();
        return sina;
    }
}
export default functions;