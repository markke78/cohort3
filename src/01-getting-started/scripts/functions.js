
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
