const functions ={
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

// daily assignment on 2019/OCT/09
    makeEmailArr: (nameArray) =>{
        return nameArray[0].toLowerCase() + "." + nameArray[1].toLowerCase() + "@evolveu.ca";
    },

// daily assignment on 2019/OCT/11
    makeEmailObj: (nameObj) => {
        let firstName = nameObj.fname.toLowerCase();
        let lastName = nameObj.lname.toLowerCase();
        let email = firstName + "." + lastName + "@evolveu.ca";
        return email;
    }

}



export default functions;
