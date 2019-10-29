
export class Account{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }

    deposit(amount){
        if(!this.isNumber(amount)) return;
        this.balance += amount;
    }
        

    withdraw(amount){
        if(!this.isNumber(amount)) return;
        this.balance -= amount;
    }

    balance1(){
        return this.balance;
    }

    isNumber(amount){
        if(isNaN(amount)){
            return false;
        }else{
            return true;
        }
    }
 
}

