const functions = {
    addCard: (node, counter)=>{
        let newDiv = document.createElement('div')
        //node.textContent="I am newDiv";
        newDiv.className="card1";
        newDiv.setAttribute('counter',counter),
        newDiv.textContent = `card1 # ${counter}`;
        node.appendChild(newDiv);
     
    },
    whatCards:(node)=>{
        // return [0,1,2];
        let arr =[];
        for (let b of node.children){
            arr.push(b.getAttribute('counter'));
        }
       

        // let arr =[];
        // for(let i =0; i<node.children.length;i++){
        //     arr[i] = node.children[i].getAttribute('counter');
        // }        
        return arr;

    }
};


export default functions;
