import functions from "./daily.js";

test("Compare two parameters", () => {
  expect(functions.assertEquals("a", "b")).toBe(false);
  expect(functions.assertEquals("a", "a")).toBe(true);
  expect(functions.assertEquals(1, 2)).toBe(false);
  expect(functions.assertEquals(2, 2)).toBe(true);
  expect(functions.assertEquals("2", 2)).toBe(false);
  expect(functions.assertEquals("This value", "This value")).toBe(true);
});

test("email builder from an array", () => {
  const name = ["first", "last"];
  expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["First", "Last"])).toEqual(
    "first.last@evolveu.ca"
  );
  expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual(
    "bill.smith@evolveu.ca"
  );
});

test("email builder from an object / map", () => {
  const name = { fname: "first", lname: "last" };
  expect(functions.makeEmailObj(name)).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: "First", lname: "Last" })).toEqual(
    "first.last@evolveu.ca"
  );
  expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" })).toEqual(
    "bill.smith@evolveu.ca"
  );
});

test("test forLoop", () => {
  expect(
    functions.loopFor(["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"])
  ).toEqual("BMW,Volvo,Saab,Ford,Fiat,Audi,");
});

test("test whileLoop", () => {
  expect(
    functions.loopWhile(["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"])
  ).toBe("BMW,Volvo,Saab,Ford,Fiat,Audi,");
});

test("test doWhileLoop", () => {
  expect(functions.loopDoWhile(5)[3]).toBe(3);
});

test("test forIn", () => {
  expect(functions.loopForIn(["Mark", "Ethan", "Jim"][0])).toBe("0");
});

test("test forOf", () => {
  expect(functions.loopForOf(["Mark", "Ethan", "Jim"][0])).toBe("M");
});

test("test slice", () => {
  expect(
    functions.mySlice(["Banana", "Orange", "Lemon", "Apple", "Mango"])
  ).toEqual(["Orange", "Lemon"]);
});

test("test splice", () => {
  expect(functions.mySplice(["Banana", "Orange", "Apple", "Mango"])).toEqual(
    []
  );
});

test("test forEach", () => {
  expect(functions.myForEach([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
});

test("test map", () => {
  expect(functions.myMap([4, 9, 16, 25])).toEqual([2, 3, 4, 5]);
});

test("test reduce", () => {
  expect(functions.myReduce([1, 2, 3, 4])).toBe(10);
});

test("test filter", () => {
  expect(
    functions.myFilter([
      "spray",
      "limit",
      "elite",
      "exuberant",
      "destruction",
      "present"
    ])
  ).toEqual(["exuberant", "destruction", "present"]);
});

test("test sort", () => {
  expect(functions.mySort(["Banana", "Orange", "Apple", "Mango"])).toEqual([
    "Apple",
    "Banana",
    "Mango",
    "Orange"
  ]);
});

test("email builder for company", () => {
  const staffEmail = functions.loopStaff(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("email builder for company", () => {
  const staffEmail = functions.loopStaffOf(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("email builder for company", () => {
  const staffEmail = functions.loopStaffIn(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("email builder for company", () => {
  const staffEmail = functions.loopStaffMap(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("email builder for company", () => {
  const staffEmail = functions.loopStaffForEach(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("email builder for company", () => {
  expect(functions.loopReduce(data.staff)).toBe(3823);
});

test("email builder for company", () => {
  expect(functions.loopAverage(data.staff)).toBe(546.1428571428571);
});

test("text callback", () => {
  expect(functions.callbackFunc(data.staff).length).toBe(2);
  expect(functions.callbackFunc(data.staff)).toEqual([
    { fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 }
  ]);
});

expect.extend({
  toBeABorBC(received) {
    const pass = received === "AB" || received === "BC";
    if (pass) {
      return {
        message: () => `expected ${received} to be 'AB' or 'BC'`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} to be 'AB' or 'BC'`,
        pass: false
      };
    }
  }
});

test("text callback function", () => {
  const peopleABBC = functions.getPeopleFromAbBc(people, "callback");
  expect(peopleABBC.length).toBe(22);
  expect(peopleABBC[0].province).toBe("BC");
  expect(peopleABBC[1].province).toBe("AB");

  let fullNameStr = functions.fullName([
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 }
  ]);
  expect(fullNameStr[0]).toBe("Alex Smith");

  const peopleABBC2 = functions.getPeopleFromAbBc(people, functions.fullName);
  expect(peopleABBC2.length).toBe(22);
  expect(peopleABBC2[0]).toBe("Alex Smith");
  expect(peopleABBC2[21]).toBe("Trent Kerr");
});

test("total people from AB and BC", () => {
  const peopleABBC3 = functions.getPeopleFromAbBc(
    people,
    functions.getNumPeople
  );
  expect(peopleABBC3).toEqual({
    totalAge: 838,
    totalAveAge: 38.09,
    totalPep: 22
  });
});

test("Anonymous function working", () => {
  // let numArray = (function(array) {
  //   return myArray.sort(function(a, b) {
  //     return a.num - b.num;
  //   });
  // })(myArray);
  expect(functions.anonymousFunc(myArray)).toEqual([
    { num: 1, origin: "California", str: "cantaloupe" },
    { num: 2, origin: "Mexico", str: "lemons" },
    { num: 3, origin: "Chile", str: "blueberries" },
    { num: 4, origin: "Brazil", str: "pineapple" },
    { num: 5, origin: "BC", str: "apples" },
    { num: 6, origin: "Mexico", str: "avocados" },
    { num: 7, origin: "Florida", str: "oranges" },
    { num: 8, origin: "Ecuador", str: "bananas" },
    { num: 9, origin: "Oregon", str: "pears" }
  ]);
  expect(functions.nameFunc(myArray)).toEqual([
    { num: 5, origin: "BC", str: "apples" },
    { num: 6, origin: "Mexico", str: "avocados" },
    { num: 8, origin: "Ecuador", str: "bananas" },
    { num: 3, origin: "Chile", str: "blueberries" },
    { num: 1, origin: "California", str: "cantaloupe" },
    { num: 2, origin: "Mexico", str: "lemons" },
    { num: 7, origin: "Florida", str: "oranges" },
    { num: 9, origin: "Oregon", str: "pears" },
    { num: 4, origin: "Brazil", str: "pineapple" }
  ]);

  expect(functions.originFunc(myArray)).toEqual([
    { num: 5, origin: "BC", str: "apples" },
    { num: 4, origin: "Brazil", str: "pineapple" },
    { num: 1, origin: "California", str: "cantaloupe" },
    { num: 3, origin: "Chile", str: "blueberries" },
    { num: 8, origin: "Ecuador", str: "bananas" },
    { num: 7, origin: "Florida", str: "oranges" },
    { num: 6, origin: "Mexico", str: "avocados" },
    { num: 2, origin: "Mexico", str: "lemons" },
    { num: 9, origin: "Oregon", str: "pears" }
  ]);
});

let myArray = [
  { num: 5, str: "apples", origin: "BC" },
  { num: 7, str: "oranges", origin: "Florida" },
  { num: 2, str: "lemons", origin: "Mexico" },
  { num: 8, str: "bananas", origin: "Ecuador" },
  { num: 6, str: "avocados", origin: "Mexico" },
  { num: 4, str: "pineapple", origin: "Brazil" },
  { num: 3, str: "blueberries", origin: "Chile" },
  { num: 9, str: "pears", origin: "Oregon" },
  { num: 1, str: "cantaloupe", origin: "California" }
];
//
// Do the statements below 3 times, one for each type of function
//

const data = {
  staff: [
    { fname: "Jane", lname: "Smith", balance: 10 },
    { fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 },
    { fname: "Olivia", lname: "Notly", balance: 310 },
    { fname: "Noah", lname: "Ho", balance: 503 },
    { fname: "William", lname: "Lee", balance: 520 },
    { fname: "Benjamin", lname: "Amis", balance: 150 }
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};

const people = [
  { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
  { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
  { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
  { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
  { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
  { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
  { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
  { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
  { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
  { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
  { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
  { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
  { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
  { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
  { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
  { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
  { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
  { fname: "James", lname: "Kramer", province: "AB", age: 57 },
  { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
  { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
  { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
  { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
  { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
  { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
  { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
  { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
  { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
  { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
  { fname: "Luis", lname: "Price", province: "BC", age: 23 },
  { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
  { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
  { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
  { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
  { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
  { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
  { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
  { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
  { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
  { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
  { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
  { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
  { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
  { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
  { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];
