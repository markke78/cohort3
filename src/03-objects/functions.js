class Account {
  constructor(accountName, balance, accountType) {
    this.accountName = accountName;
    this.balance = balance;
    this.accountType = accountType;
  }

  deposit(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  }

  withdraw(amount) {
    this.balance = this.balance - amount;
    return this.balance;
  }

  show() {
    return this.balance;
  }

  accountName1() {
    return this.accountName;
  }

  balance1() {
    return this.balance;
  }

  accountType1() {
    return this.accountType;
  }
}

class AccountController {
  constructor() {
    this.userAccounts = [];
  }

  addAccount(accountName, balance, accountType) {
    let message;
    if (this.checkRepeat(accountName)) return (message = "Account Exists");
    const newAccount = new Account(accountName, balance, accountType);
    this.userAccounts.push(newAccount);
    console.log(this.userAccounts);
    return this.userAccounts;
  }

  checkRepeat(accountName) {
    for (let b of this.userAccounts) {
      if (b.accountName1() == accountName) {
        return true;
      }
    }
    return false;
  }

  removeAccount(accountName) {
    let itemToRemove;
    this.userAccounts.forEach(function(element) {
      if (element.accountName === accountName) {
        itemToRemove = element;
      }
    });
    this.userAccounts.splice(this.userAccounts.indexOf(itemToRemove), 1);
  }

  //   totalBalance() {
  //     let totalBalance = 0;
  //     this.userAccounts.forEach(function(element) {
  //       totalBalance += element.balance;
  //     });
  //     return totalBalance;
  //   }

  totalBalance() {
    let summary = 0;
    let heighest = -999999999999999999999;
    let heighestAccount = "";
    let lowest = 9999999999999999999999;
    let lowestAccount = "";

    for (let b of this.userAccounts) {
      summary += b.balance1();
      if (heighest < b.balance1()) {
        heighest = b.balance1();
        console.log(heighest);
        heighestAccount = b.accountType1();
      }
      if (lowest > b.balance1()) {
        lowest = b.balance1();
        console.log(lowest);
        lowestAccount = b.accountType1();
      }
      return summary;
    }
    return {
      summary: summary,
      heightest: heighestAccount,
      lowest: lowestAccount
    };
  }

  // compareBalance () {
  //}
}

export { Account, AccountController };
