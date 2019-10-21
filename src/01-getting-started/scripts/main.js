import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

//Canadian taxes
var result;
button1.addEventListener("click", ()=> {
  result=functions.myTax(parseFloat(input1.value),result);
  document.getElementById("span1").textContent = result; 
});

//Working with arrays
var message =[];
but1.addEventListener("click", (()=>{
    let message1 = functions.myNumber(parseFloat(array1.value), message);
    array1.value="";
    document.getElementById("new").textContent=message1[1];
    message=message1[0];
    //document.getElementById("new").textContent=message;
}));

but2.addEventListener("click",()=>{
    document.getElementById("new").textContent=message;
        array1.value="";  
});

but3.addEventListener("click",()=>{
    var total = 0;
    message.forEach((item) =>{
        total += item;
        document.getElementById("new").textContent=total;
    })
});

but4.addEventListener("click",()=>{
    document.getElementById("new").textContent="Message Area";
    message=[];
});

//Working with Dictionaries
dic2.addEventListener("click", () => {
        document.getElementById("dic3").textContent= functions.provinces(dic1.value);
    });


//calc
    var firstData = "";
    const key = document.querySelectorAll(".btn");
    for (let b of key) {
    b.addEventListener("click", (event) => {
        let process = functions.myCalculator(isOperatorClick,firstData,operator,input.value,event.target.value);
        isOperatorClick=process.isOperatorClick;
        firstData=process.firstData;
        input.value = process.iv;
    
    })}

    var key1 =document.querySelectorAll(".btn4");
    var operator ="";
    //true: while opertor clicked
    //false: while operator not clicked yet
    var isOperatorClick = false; 
    for (let b of key1) {
            b.addEventListener("click",(event)=>{ 
               let process = functions.caculatorWhenClickOperators(isOperatorClick,firstData,operator,event.target.value,input.value);
               isOperatorClick = process.isOperatorClick;
               operator = process.operator; 
               input.value = process.iv;
        })}
    
    document.querySelector(".btn3").addEventListener("click",()=>{
        let process = functions.caculatorWhenClickEqual(firstData,operator,input.value);
        isOperatorClick = process.isOperatorClick;
        operator = process.operator;
        input.value = process.iv;
    })
    
    
    
    document.querySelector(".btn1").addEventListener("click",()=>{
        input.value=input.value.substring(0, input.value.length -1);
    })
    
    document.querySelector(".btn2").addEventListener("click",()=> {
        input.value = "";
        firstData ="";// after click =, firstData still has value, so need to make it null.
      })












