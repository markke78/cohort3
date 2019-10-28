
export class Account{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }
        

    withdraw(amount){
        this.balance -= amount;
    }

    balance1(){
        return this.balance;
    }

 
}

