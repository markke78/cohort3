
const functions = {
    
    size: (num) => {
        if (num< 0) return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },
//Working with Arrays
    myNumber: (num, message) => {
    
        if (isNaN(num)== true){
            //message = ["the input is not a valid number"];
            //dom.textContent="the input is not a valid number";
            return [message,"the input is not a valid number"];
        }else{
            //dom.textContent="the number has been added to the array.";
            message.push(num);
            return [message,"the number has been added to the array."];
        }
    },

//Canadians taxes
    myTax: (income, result) => {
        if (income <= 47630 ) {
          result = "$" + Math.round(income * 0.15 *100 )/100;
             return result;
          }else 
            if (income> 47630 && income <= 95259){
            result = "$" + Math.round(((47630 * 0.15) + ((income-47630) * 0.205))*100)/100;
            return result;
          }else
            if (income> 95259 && income <= 147667){
            result = "$" + Math.round(((47630 * 0.15) + (47629*0.205) + ((income - 95259) * 0.26))*100)/100
            return result;
          }else 
            if (income > 147667 && income <= 210371){
            result = "$" + Math.round(((47630 * 0.15) + (47629*0.205) + (52408* 0.26) + ((income- 147667) * 0.29))*100)/100
            return result;
          }else{
            result = "$" + Math.round(((47630 * 0.15) + (47629*0.205) + (52408* 0.26) + (62704 * 0.29) +((income - 210371) * 0.33))*100)/100
            return result;
        }
    },
//Working with Dicionaries
    provinces: (short) => {
        return canada[short];
    },

//Caculator
    myCalculator: (isOperatorClick,firstData,operator,iv,eventTarget) =>{
        if (isOperatorClick==true) {
            if(iv==""&&firstData=="" && operator== "-"){
                firstData="0";// set up firstData = 0, then click numbers, after that click any operators, it will execute the operator function.
            }else {
                firstData=iv;
            }
            
            iv =eventTarget;//after click operator
            isOperatorClick=false;//need to turn off to put next new number.
        
        // line17 is for only putting once "."    
        }else {
            if (eventTarget != "." || (eventTarget == "." && noPointExist(iv))){
                iv += eventTarget;//initail number
            }
        
        }
        return {
            isOperatorClick:isOperatorClick,
            firstData:firstData,
            iv:iv
        };
    },
    caculatorWhenClickOperators:(isOperatorClick,firstData,operator,eventTarget,iv)=>{
        if (isOperatorClick != true) { 
            if (firstData != "") {
             switch(operator){
                 case "+":
                     iv =((parseFloat(firstData) + parseFloat(iv)));
                     break; 
                 case "-":
                     iv =(parseFloat(firstData) - parseFloat(iv));
                     break;
                 case "×":
                    iv =(parseFloat(firstData) * parseFloat(iv));
                     break;
                 case "÷":
                    iv =(parseFloat(firstData) / parseFloat(iv));
                     break;
         
             }

         }}
     //input.value=event.target.value; //no show operator, so no input.value for this
         isOperatorClick = true; 
         operator =eventTarget; 
         return {
            isOperatorClick:isOperatorClick,
            operator:operator,
            iv:iv
         };

    },
    caculatorWhenClickEqual:(firstData,operator,iv)=>{
        if (firstData==""&&iv==""){ 
            operator=""; //prevent numbers + = Nan
        }
        if(firstData==""&&iv!=""){
            firstData=iv;
        }
        // if(input.value==""&&firstData!=""){
        //     input.value=firstData;
        // }
        switch(operator){
            case "+":
                iv =((parseFloat(firstData) + parseFloat(iv)));
                break; 
            case "-":
                iv =(parseFloat(firstData) - parseFloat(iv));
                break;
            case "×":
                iv =(parseFloat(firstData) * parseFloat(iv));
                break;
            case "÷":
                iv =(parseFloat(firstData) / parseFloat(iv));
                break;
    
        }
        operator=""; //prevent after execute "=", then click operator auto execute
        let isOperatorClick=true; //this is about after executing "=". if the number is clicked, it won't + with last string 
        return {
            isOperatorClick:isOperatorClick,
            operator:operator,
            firstData:firstData,
            iv:iv
        };
    },
    //this function is about looking for any "." in the string, if false, it won't go throught line 17, so it won't be allowed to click "." again.
    noPointExist : (data) =>{
        for (let i=0; i< data.length; i++){
            if (data[i] == "."){
                return false;
            }
        }
        return true;
    }
};

    var canada = {
        ab: "Alberta",
        bc: "British Columbia",
        mb: "Manitoba",
        nb: "New Brunswick",
        nl: "Newfoundland and Labrador",
        nt: "Northwest Territories",
        nu: "Nunavut",
        ns: "Nova Scotia",
        on: "Ontario",
        pe: "Prince Edward Island",
        qc: "Quebec", 
        sk: "Saskatchewan",
        yt: "Yukon"
    };

export default functions;
