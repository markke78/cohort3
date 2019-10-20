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










