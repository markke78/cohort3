import functions from './syntax'

test('add two numbers', () => {
    expect(functions.addNum(1,2)).toBe(3);
})

test('test string', () => {
    expect(functions.myString()).toBe("apple");
})

test('test boolean', () => {
    expect(functions.myBoolean(4,5)).toBe(true);
})

test('test array', () => {
    expect(functions.myArray([1, 7, "apple"])[0]).toBe(1);

})

test('test obj', () => {
    expect(functions.member1("Mark", "Ke", 41)).toEqual("Mark");

})

test('test myifelse', () => {
    expect(functions.biggerOut(1,2)).toBe(2);
})

test('test to be undefined', () => {
    expect(functions.myunderfined()).toBe(undefined);

 })

 test('test function', () => {
    expect(functions.myFun(1,2)).toBe(2);
})

test('test add front', () => {
    expect(functions.addFront([9,8,7])[0]).toBe(2);
})

test('test add end', () => {
    expect(functions.addEnd([9,8,7])[3]).toBe(2);
})

test('test update', () => {
    expect(functions.addUpdate([9,8,7])[1]).toBe(2);
})

test('test forLoop', () => {
    expect(functions.loopFor(5)).toBe(5);
})

test('test forLoop', () => {
    expect(functions.loopForIn(["Mark", "Ethan", "Jim"][0])).toBe("0");
})

test('test whileLoop', () => {
    expect(functions.loopWhile(5)).toBe(5);
})


test('test doWhileLoop', () => {
    expect(functions.loopDoWhile(5)[3]).toBe(3);
})

test('test forEach', () => {
    expect(functions.myForEach([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
})

test('test obj', () => {
    expect(functions.member1("Mark", "Ke", 41)).toEqual("Mark");
})
