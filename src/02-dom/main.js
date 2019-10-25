import functions from './functions.js';

// var items=["Item1","Item2","Item3"];
var items=[];
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

var counter = 1;
ac1.addEventListener("click", () => {
    functions.addCards(more, counter++)
})

document.addEventListener("click", (e) => {
    if (e.target && e.target.className == "addBefore") {
        functions.addBefore(counter++, e.target.closest(".card"));
    }
    if (e.target && e.target.className == "addAfter") {
        functions.addAfter(counter++, e.target.closest(".card"));
    }
    if (e.target && e.target.className == "delete") {
        functions.deleteNode(e.target.closest(".card"));
    }
});



