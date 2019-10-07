console.log("Hello World from basic.js");

var button1 = document.getElementById("button1");
//var input1= document.getElementById("input1");

button1.addEventListener("click", function onButtonClicked(){
    //console.log("I'm in the button click event");
    //console.log(parseInt(input1.value) +1);
    //console.log(size (parseInt(input1.value)));
    console.log(size(parseInt(input.value) +1));
    
})

function size(num){
    if (num<10){
        return "small";
        }else if (num<20){
            return "med";
        }else return "large";
    }
