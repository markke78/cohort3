
var caculating = document.getElementById("button1");
var result;
  caculating.addEventListener("click", ()=> {
          if (parseFloat(input1.value) <= 47630 ) {
          result = parseFloat(input1.value) * 0.15;
          
          document.getElementById("span1").textContent="$" + Math.round(result*100)/100;
        return result;
      }else 
        if (parseFloat(input1.value)> 47630 && parseFloat(input1.value) <= 95259){
            result = (47630 * 0.15) + ((parseFloat(input1.value) - 47630) * 0.205)
            
            document.getElementById("span1").textContent="$" + Math.round(result*100)/100;
            return result;
        } else
        if (parseFloat(input1.value)> 95259 && parseFloat(input1.value) <= 147667){
            result = (47630 * 0.15) + (47629*0.205) + ((parseFloat(input1.value)- 95259) * 0.26)
           
            document.getElementById("span1").textContent="$" + Math.round(result*100)/100;
            return result;
        }else 
        if (parseFloat(input1.value)> 147667 && parseFloat(input1.value) <= 210371){
            result = (47630 * 0.15) + (47629*0.205) + (52408* 0.26) + ((parseFloat(input1.value)- 147667) * 0.29)
            reult = Math.round(result*100)/100;
            document.getElementById("span1").textContent="$" + result;
            return result;
        }else{
            result = (47630 * 0.15) + (47629*0.205) + (52408* 0.26) + (62704 * 0.29) + ((parseFloat(input1.value)- 210371) * 0.33)
            result = Math.round(result*100)/100;
            document.getElementById("span1").textContent="$" + result;
            return result;
        }
    
        // document.getElementById("span1");
        // span1.textContent=result;
        // const display = document.getElementById("span1");
        // display.textContent = `Your tax this year: ${result};`      
        // console.log(result);

  });