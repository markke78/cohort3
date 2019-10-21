import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does that subtract function work?', () => {
    expect(functions.subtract(1,2)).toBe(-1);
});


test('Check array function', () => {
    expect(functions.myNumber(1,[])).toEqual([[1],"the number has been added to the array."]);
    expect(functions.myNumber("a",[])).toEqual([[], "the input is not a valid number"]);
});

test('Check Canadian taxes function', () => {
    expect(functions.myTax(1000)).toBe("$150");
    expect(functions.myTax(50000)).toBe("$7630.35");
    expect(functions.myTax(100000)).toBe("$18141.11");
    expect(functions.myTax(150000)).toBe("$31211.1");
    expect(functions.myTax(300000)).toBe("$78296.26");
});

test('Check Dictionaries', () => {
    expect(functions.provinces("ab")).toBe("Alberta");
});

test('Check Calculator', () => {
    expect(functions.myCalculator(false,"","-","","5")).toEqual({"firstData": "", "isOperatorClick": false, "iv": "5"});
    expect(functions.myCalculator(true,"","-","","5")).toEqual({"firstData": "0", "isOperatorClick": false, "iv": "5"});
    expect(functions.myCalculator(true,"5","-","","5")).toEqual({"firstData": "", "isOperatorClick": false, "iv": "5"});
    expect(functions.caculatorWhenClickOperators(false,"1","-","+","3")).toEqual({ "isOperatorClick": true, "iv": -2, "operator": "+"});
    expect(functions.caculatorWhenClickOperators(false,"1","+","+","3")).toEqual({ "isOperatorClick": true, "iv": 4, "operator": "+"});
    expect(functions.caculatorWhenClickOperators(false,"1","×","+","3")).toEqual({ "isOperatorClick": true, "iv": 3, "operator": "+"});
    expect(functions.caculatorWhenClickOperators(false,"6","÷","+","3")).toEqual({ "isOperatorClick": true, "iv": 2, "operator": "+"});
    expect(functions.caculatorWhenClickEqual("3","-","1")).toEqual({ "isOperatorClick": true, "iv": 2, "operator": "", "firstData": "3"});
    expect(functions.caculatorWhenClickEqual("","","")).toEqual({ "isOperatorClick": true, "iv": "", "operator": "", "firstData": ""});
    expect(functions.caculatorWhenClickEqual("","+","2")).toEqual({ "isOperatorClick": true, "iv": 4, "operator": "", "firstData": "2"});
    expect(functions.caculatorWhenClickEqual("3","+","1")).toEqual({ "isOperatorClick": true, "iv": 4, "operator": "", "firstData": "3"});
    expect(functions.caculatorWhenClickEqual("3","×","1")).toEqual({ "isOperatorClick": true, "iv": 3, "operator": "", "firstData": "3"});
    expect(functions.caculatorWhenClickEqual("3","÷","1")).toEqual({ "isOperatorClick": true, "iv": 3, "operator": "", "firstData": "3"});
    expect(functions.noPointExist("23.3")).toBe(false);
    expect(functions.noPointExist("233")).toBe(true);
});



