import { Account } from './functions.js';
var balance=0;
var acc = new Account("checking", balance);
btn1.addEventListener("click",()=>{
    acc.deposit(parseFloat(int1.value));
    int1.value="";
    
});
btn2.addEventListener("click",()=>{
   acc.withdraw(parseFloat(int1.value));
   int1.value="";
    
});

btn3.addEventListener("click",()=>{
    label1.textContent ="$" + acc.balance1();
});