var firstData = "";
const key = document.querySelectorAll(".btn");
for (let b of key) {
b.addEventListener("click", (event) => {
    if (isOperatorClick==true) {
        if(firstData=="" && operator== "-"){
            firstData="0";// set up firstData = 0, then click numbers, after that click any operators, it will execute the operator function.
        }else {
            firstData=input.value;
        }
        
        input.value =event.target.value;//after click operator
        isOperatorClick=false;//need to turn off to put next new number.
    
    // line17 is for only putting once "."    
    }else {
        if (event.target.value != "." || (event.target.value == "." && noPointExist(input.value))){
            input.value += event.target.value;//initail number
        }
    
    }

})}
//this function is about looking for any "." in the string, if false, it won't go throught line 17, so it won't be allowed to click "." again.
var noPointExist = (data) =>{
    for (let i=0; i< data.length; i++){
        if (data[i] == "."){
            return false;
        }
    }
    return true;
}

var key1 =document.querySelectorAll(".btn4");
var operator ="";
//true: while opertor clicked
//false: while operator not clicked yet
var isOperatorClick = false; 
for (let b of key1) {
        b.addEventListener("click",(event)=>{ 
           if (isOperatorClick != true) { 
               if (firstData != "") {
                switch(operator){
                    case "+":
                        input.value =((parseFloat(firstData) + parseFloat(input.value)));
                        break; 
                    case "-":
                        input.value =(parseFloat(firstData) - parseFloat(input.value));
                        break;
                    case "×":
                        input.value =(parseFloat(firstData) * parseFloat(input.value));
                        break;
                    case "÷":
                        input.value =(parseFloat(firstData) / parseFloat(input.value));
                        break;
            
                }

            }}
           

        //input.value=event.target.value; //no show operator, so no input.value for this
            isOperatorClick = true; 
            operator =event.target.value;                 
    })}

document.querySelector(".btn3").addEventListener("click",()=>{
    if (firstData==""&&input.value==""){ 
        operator=""; //prevent numbers + = Nan
    }
    if(firstData==""&&input.value!=""){
        firstData=input.value;
    }
    // if(input.value==""&&firstData!=""){
    //     input.value=firstData;
    // }
    switch(operator){
        case "+":
            input.value =((parseFloat(firstData) + parseFloat(input.value)));
            break; 
        case "-":
            input.value =(parseFloat(firstData) - parseFloat(input.value));
            break;
        case "×":
            input.value =(parseFloat(firstData) * parseFloat(input.value));
            break;
        case "÷":
            input.value =(parseFloat(firstData) / parseFloat(input.value));
            break;

    }
    operator=""; //prevent after execute "=", then click operator auto execute
    isOperatorClick=true; //this is about after executing "=". if the number is clicked, it won't + with last string 
     
})



document.querySelector(".btn1").addEventListener("click",()=>{
    input.value=input.value.substring(0, input.value.length -1);
})

document.querySelector(".btn2").addEventListener("click",()=> {
    input.value = "";
    firstData ="";// after click =, firstData still has value, so need to make it null.
  })

