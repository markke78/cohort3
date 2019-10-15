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

// daily assignment on 2019/OCT/11
    makeEmailArr: (email) =>{
        return email[0] + "." + email[1] + "@evolveu.ca";
    },

}



export default functions;
