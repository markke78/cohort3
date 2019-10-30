const functions ={
 //daily assignment on 2019/OCT/29
   
    loopReduce: (arrayObj) => {
        let staffMoney=[];
        let balance=0; 
        arrayObj.forEach((item)=>{
        staffMoney.push(item.balance);
        balance = staffMoney.reduce((acc,cur)=> acc + cur);
        });
        return balance;
    },

    loopAverage:(arrayObj) => {
        let staffMoney=[];
        let balance=0; 
        arrayObj.forEach((item)=>{
        staffMoney.push(item.balance);
        balance = staffMoney.reduce((acc,cur)=> acc + cur)/staffMoney.length;
        });
        return balance;
    },

    //daily assignment on 2019/OCT/25
    
    loopStaffMap: (arrayObj) => {
            let staffEmail = arrayObj.map((item) => {
            return functions.makeEmailObj(item);
        });
        return staffEmail;
    },

    // loopStaffMap: (arrayObj) => {
    //     let staffEmail=[];
    //     arrayObj.map((item)=>{
    //         staffEmail.push(functions.makeEmailObj(item));
    //     })
    //     return staffEmail;
    // },

    loopStaffForEach: (arrayObj) => {
        let staffEmail=[];
        arrayObj.forEach((item)=>{
        staffEmail.push(functions.makeEmailObj(item));
        });
        return staffEmail;
    },
 
    //daily assignment on 2019/OCT/24
    
    loopStaffOf: (arrayObj) => {
        let staffEmail=[];
        for (let b of arrayObj){
            staffEmail.push(functions.makeEmailObj(b));
        }
        return staffEmail;
    },

    loopStaffIn: (arrayObj) => {
        let staffEmail=[];
        for (let b in arrayObj){
            staffEmail.push(functions.makeEmailObj(arrayObj[b]));
        }
        return staffEmail;
    },
    
    //daily assignment on 2019/OCT/21

    loopStaff: (arrayObj) => {
        let staffEmail=[];
        arrayObj.forEach(function(item){
            staffEmail.push(functions.makeEmailObj(item));
        });
        return staffEmail;

    },

   //daily assigment on 2019/OCT/16
    // slice
    mySlice: (fruits) => {
        var citrus = fruits.slice(1, 3);
        return citrus;
    },

    // splice
    mySplice: (fruits) => {
        var citrus = fruits.splice(2, 0, "Lemon", "Kiwi");
        return citrus;
    },
   
    // forEach
    myForEach: (numArray) => {
        const number = numArray;
        const double = [];
        const newArray = number.forEach((num) => {
            double.push(num*2);
        })
            return double;
    },

    // map
    myMap: (numbers) => {
        var x = numbers.map(Math.sqrt)
        return x;
    },

    // reduce
    myReduce: (arr) => {
        var total= arr.reduce(function(a,b){return a + b});
        return total;
    },
    
    // filter
    myFilter: (words)=>{
        const result = words.filter(word => word.length > 6)
        return result;
    },

    // sort
    mySort: (fruits) => {
        fruits.sort();
        return fruits;
    },
      
 
    //daily assignment on 2019/OCT/15
    // Basics
    // for
    loopFor: (cars) => {
        var text =[];
        for (var i = 0; i < cars.length; i++){
            text += cars[i] + ",";
        }
           return text;
    },

    //while
    loopWhile: (cars) => {
        var text = [];
        var j=0;
        while (j < cars.length ){
            text += cars[j] + ",";
            j=j+1;
            
        } return text;
    },

    //do while
    loopDoWhile: (mySw) => {
        var ourArray = [];
        var k =0
        do{
            ourArray.push(k);
            k++;
        } while (k <5);
        return ourArray
    },

    // Next Level
    // for in
    loopForIn: (myTeam) => {
        var z;
        for (z in myTeam) {
            return z
        }
     },

     //for of
     loopForOf: (myTeam) => {
        var z;
        for (z of myTeam) {
            return z
        }
     },


     // daily assignment on 2019/OCT/11
    makeEmailObj: (nameObj) => {
        let firstName = nameObj.fname.toLowerCase();
        let lastName = nameObj.lname.toLowerCase();
        let email = firstName + "." + lastName + "@evolveu.ca";
        return email;
    },


    // daily assignment on 2019/OCT/09
    makeEmailArr: (nameArray) =>{
        return nameArray[0].toLowerCase() + "." + nameArray[1].toLowerCase() + "@evolveu.ca";
    },

 
    //daily assignment on 2019/OCT/07
    assertEquals : (p1, p2) => {
        if (p1 === p2) {
            return true;
            }else { 
                console.log("*** the two values are not the same:")
                console.log("p1-->", p1);
                console.log("p2-->", p2);
            return false;
             }
    },

}

export default functions;
