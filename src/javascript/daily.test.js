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
    expect(functions.loopFor(["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"])).toEqual("BMW,Volvo,Saab,Ford,Fiat,Audi,");
});

test('test whileLoop', () => {
    expect(functions.loopWhile(["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"])).toBe("BMW,Volvo,Saab,Ford,Fiat,Audi,");
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

test('test slice', () => {
    expect(functions.mySlice(["Banana", "Orange", "Lemon", "Apple", "Mango"])).toEqual(["Orange", "Lemon"]);
})

test('test splice', () => {
    expect(functions.mySplice(["Banana", "Orange", "Apple", "Mango"])).toEqual([]);
})

test('test forEach', () => {
    expect(functions.myForEach([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
})    

test('test map', () => {
    expect(functions.myMap([4, 9, 16, 25])).toEqual([2, 3, 4, 5]);
})    

test('test reduce', () => {
    expect(functions.myReduce([1, 2, 3, 4])).toBe(10);
})

test('test filter', () => {
    expect(functions.myFilter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'])).toEqual(['exuberant', 'destruction', 'present']);
})

test('test sort', () => {
    expect(functions.mySort(["Banana", "Orange", "Apple", "Mango"])).toEqual(["Apple","Banana","Mango","Orange"]);
})

test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
    })

    const data = {
        staff: [
            { fname: "Jane", lname: "Smith", balance: 10 },
            { fname: "Liam", lname: "Henry", balance: 1000 },
            { fname: "Emma", lname: "Jones", balance: 1330 },
            { fname: "Olivia", lname: "Notly", balance: 310 },
            { fname: "Noah", lname: "Ho", balance: 503 },
            { fname: "William", lname: "Lee", balance: 520 },
            { fname: "Benjamin", lname: "Amis", balance: 150 },
        ],
        company: "EvolveU",
        city: "Calgary",
        prov: "Alberta"
    };
