import functions from './functions.js'
import { exportAllDeclaration } from '@babel/types';



test('show item', () => {
    let div = document.createElement('div');
    let addItem = document.createElement("li");
    div.appendChild(addItem);
    expect(div.childElementCount).toBe(1);
    functions.myItems(["Item 1","Item 2"],div);
    expect(div.childElementCount).toBe(2);
    expect(div.children[1].className).toBe('linux');
    expect(div.children[1].textContent).toBe("Item 2");
});

test('add', ()=>{
expect(functions.plusItems([],1)).toEqual(["Item 1"]);
})

test('start', ()=>{
    expect(functions.startItems([],1)).toEqual(["Item 1"]);
})

test('delete', ()=>{
    expect(functions.deleteItems(["Item 1","Item 2","Item 3"])).toEqual(["Item 1","Item 2",]);
})


test('add card', () => {
    let div = document.createElement('div');
    let newDiv = document.createElement("div");
    div.appendChild(newDiv);
    expect(div.childElementCount).toBe(1);
    functions.addCards(div,1)
    expect(div.childElementCount).toBe(2);
    expect(div.children[1].className).toBe("card");
    expect(div.children[1].getAttribute('counter')).toBe("1");
    expect(div.children[1].textContent).toBe("card # 1addBeforeaddAfterDelete");
    expect(functions.addCards(div,1).childElementCount).toBe(5);
    expect(functions.addBefore(1,newDiv).childElementCount).toBe(5);
    expect(functions.addAfter(1,newDiv).childElementCount).toBe(5);
    expect(functions.deleteNode(newDiv).childElementCount).toBe(0);

});
