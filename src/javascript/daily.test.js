import functions from './daily.js'

test('Compare two parameters', () => {
    expect(functions.assertEquals("a","b")).toBe(false);
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(1,2)).toBe(false);
    expect(functions.assertEquals(2,2)).toBe(true);
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("This value","This value")).toBe(true);
});

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"])).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual("bill.smith@evolveu.ca");
});


test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name)).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' })).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" })).toEqual("bill.smith@evolveu.ca");
});

test('test forLoop', () => {
    expect(functions.loopFor(5)).toBe(5);
});

test('test whileLoop', () => {
    expect(functions.loopWhile(5)).toBe(5);
});

test('test doWhileLoop', () => {
    expect(functions.loopDoWhile(5)[3]).toBe(3);
});

test('test forIn', () => {
    expect(functions.loopForIn(["Mark", "Ethan", "Jim"][0])).toBe("0");
})

test('test forOf', () => {
    expect(functions.loopForOf(["Mark", "Ethan", "Jim"][0])).toBe("M");
})


