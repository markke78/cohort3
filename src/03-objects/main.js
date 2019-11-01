import { Account, AccountController } from './functions.js';
var balance=0;
var controller = new AccountController();
var acc = new Account("checking", balance);
btn1.addEventListener("click",()=>{
    controller.accountOperation(rightSelect.value,"deposit",parseFloat(int1.value));
    let obj = controller.totalBalance();
    console.log(obj);
    totalAmount.textContent  = obj.summary;
    highest.textContent = obj.heightest;
    lowest.textContent = obj.lowest;
    // acc.deposit(parseFloat(int1.value));
    // int1.value="";
    // span1.textContent ="$" + acc.balance1();
});
btn2.addEventListener("click",()=>{
    controller.accountOperation(rightSelect.value,"withDraw",parseFloat(int1.value));
    let obj = controller.totalBalance();
    totalAmount.textContent  = obj.summary;
    highest.textContent = obj.heightest;
    lowest.textContent = obj.lowest;
//    acc.withdraw(parseFloat(int1.value));
//    int1.value="";
//    span1.textContent ="$" + acc.balance1();
});

btn3.addEventListener("click",()=>{
    span1.textContent ="$" + acc.balance1();
});

btn4.addEventListener("click",()=>{
    controller.addAcc(addType1.value,0, addType1.options[addType1.selectedIndex].text,accArea,rightSelect);
})