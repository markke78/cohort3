import functions from './functions.js';

var items=["Item1","Item2","Item3"];
var intemsIndex = items.length+1;
dom1.addEventListener("click", ()=>{
    functions.myItems(items,apple);
})

dom2.addEventListener("click", ()=>{
    items = functions.plusItems(items,intemsIndex);
    intemsIndex++;
})

dom3.addEventListener("click", ()=>{
    items = functions.startItems(items,intemsIndex);
    intemsIndex++;
})

dom4.addEventListener("click", ()=>{
    items = functions.deleteItems(items);
    
})



