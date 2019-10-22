import functions from './domprac.js'

test('add card', () => {
    let newDiv = document.createElement('div');
    functions.addCard(newDiv);


});

test('what cards', ()=>{
    const newCard = document.createElement("div");
    functions.addCard(newCard, 0);
    functions.addCard(newCard, 1);
    functions.addCard(newCard, 2);
    expect(functions.whatCards(newCard)).toEqual(["0","1","2"]);

    functions.addCard(newCard, 3);
    expect(functions.whatCards(newCard)).toEqual(["0","1","2","3"]);




})
