class Account {
  constructor(accountName, balance, accountType) {
    this.accountName = accountName;
    this.balance = balance;
    this.accountType = accountType;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    this.balance -= amount;
    return this.balance;
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
    if (this.isRepeat(accountName)) {
      return;
    }
    const newAccount = new Account(accountName, balance, accountType);
    this.userAccounts.push(newAccount);
    return newAccount;
  }

  isRepeat(accountName) {
    for (let b of this.userAccounts) {
      if (b.accountName == accountName) {
        return true;
      }
    }
    return false;
  }

  accountOperation(accountName, amount, operator) {
    for (let b of this.userAccounts) {
      if (accountName == b.accountName) {
        if (operator == "deposit") {
          b.deposit(amount);
        }
        if (operator == "withdraw") {
          b.withdraw(amount);
        }
        return b.balance1();
      }
    }
  }

  totalBalance() {
    let summary = 0;
    for (let b of this.userAccounts) {
      summary += b.balance1();
    }
    return summary;
  }

  heighestValue() {
    let balanceNumbers = [];
    for (let b of this.userAccounts) {
      balanceNumbers.push(b.balance1());
    }
    let heighestValue = Math.max(...balanceNumbers);
    for (let b of this.userAccounts) {
      if (b.balance1() == heighestValue) {
        return [b.accountType1(), b.balance1()];
        // return {"type":b.accountType1(),"balance":b.balance1()};
      }
    }
    return ["", 0];
  }

  lowestValue() {
    //let balanceNumbers = [];
    if (this.userAccounts.length < 1) return ["", 0];
    let b = this.userAccounts.reduce((prev, current) =>
      prev.balance1() < current.balance1() ? prev : current
    );
    return [b.accountType1(), b.balance1()];

    // return [max.accountType1(), max.balance1()];
    // for (let b of this.userAccounts) {
    //   balanceNumbers.push(b.balance1());
    //   console.log(balanceNumbers);
    // }
    // let lowestValue = Math.min(...balanceNumbers);
    // return lowestValue;
  }

  replaceOption() {
    let str = "";
    for (let b of this.userAccounts) {
      str +=
        "<option value=" + b.accountName + ">" + b.accountType1() + "</option>";
    }
    return str;
  }

  removeAccount(accountName) {
    for (let b in this.userAccounts) {
      if (this.userAccounts[b].accountName == accountName) {
        this.userAccounts.splice(b, 1);
        break;
      }
    }
    return this.userAccounts;
  }
}

export { AccountController, Account };
