import { memberExpression } from "@babel/types";


//define attributes / variables
const functions = {

    addNum: (a,b) => {
        return a+b;
    },

    // string
    myString: () => {
        let c="apple";
        return c;
    },
    
    myBoolean: (a,b) => {
        return a <= b;
    },

    myArray: (array) => {
        return array;
    },

    // //dictionary / objects
    
    member1: (fstName, lstName, ag) => {
        let person = {Firstname:fstName, Lastname:lstName, age:ag};
        return person.Firstname;
    },


    // sample if / else
    
    biggerOut: (a,b) => {
        if (a > b){
            return a;
        }else{
            return b;
        }
    },

// undefined

    myunderfined: (a, b) => {
        a + b;
    },

// functions
    // parameters
    // returns

    myFun: (a, b) => {
        return a * b;
    },

// arrays
    // add to the front
addFront: (addArray) => {
    addArray.unshift(2);
    return addArray;
},

    // add to the end
addEnd: (addArray) => {
    addArray.push(2);
    return addArray;
},
    // update values

addUpdate: (addArray) => {
    addArray[1] = 2;
    return addArray;
},

// loops 
    // for
loopFor: (sw) => {
    for (var i = 0; i < sw; i++);
        return i;
},
    
    // for/in
loopForIn: (myTeam) => {
    var z;
    for (z in myTeam) {
        return z
    }

},
    // while
loopWhile: (sw) => {
    var j = 0
    while (j < sw ){
        j=j+1;
    } return j;
},

    // do while
loopDoWhile: (mySw) => {
    var ourArray = [];
    var k =0
    do{
        ourArray.push(k);
        k++;
    } while (k <5);
    return ourArray

    },

    // forEach (with array and function)
    myForEach: (numArray) => {
        const number = numArray;
        const double = [];
        const newArray = number.forEach((num) => {
            double.push(num*2);
        })
            return double;
    },

    // Objects / Dictionaries
        // declare object
        // lookup key to retrieve value
        
        member1: (fstName, lstName, ag) => {
            let person = {Firstname:fstName, Lastname:lstName, age:ag};
            return person.Firstname;
        }
    


    }

export default functions;






