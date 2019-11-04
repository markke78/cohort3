import { Account, AccountController } from "./functions.js";

test("class account", () => {
  let acc = new Account("checking", 1);
  acc.deposit(100);
  expect(acc.balance1()).toBe(101);
  acc.withdraw(50);
  expect(acc.balance1()).toBe(51);
});

test("check the controller create account1", () => {
  const controller = new AccountController("controller");
  controller.addAccount("checking", 0);
  expect(controller.userAccounts[0].accountName).toBe("checking");
  controller.addAccount("saving", 0);
  expect(controller.userAccounts[1].accountName).toBe("saving");
  let newAccount = controller.addAccount("RRSP", 0);
  expect(newAccount).toEqual({
    accountName: "RRSP",
    accountType: undefined,
    balance: 0
  });
});

test("check isRepeat working", () => {
  const controller = new AccountController("controller");
  controller.addAccount("checking", 0);
  expect(controller.isRepeat("checking")).toBe(true);
  expect(controller.isRepeat("saving")).toBe(false);
});

test("checking accountOperation working", () => {
  const controller = new AccountController("controller");
  controller.addAccount("checking", 0);
  controller.addAccount("saving", 0);
  expect(controller.accountOperation("checking", 100, "deposit")).toBe(100);
  expect(controller.accountOperation("checking", 10, "withdraw")).toBe(90);
});

test("checking totalBalance working", () => {
  const controller = new AccountController("controller");
  controller.addAccount("checking", 200);
  controller.addAccount("saving", 100);
  expect(controller.totalBalance()).toBe(300);
});

test("check heighest value", () => {
  const controller = new AccountController("controller");
  controller.addAccount("checking", 200, "Checking Account");
  controller.addAccount("saving", 500, "Saving Account");
  controller.addAccount("RRSP", 100, "RRSP Account");
  expect(controller.heighestValue()).toEqual(["Saving Account", 500]);
});

test("check lowest value", () => {
  const controller = new AccountController("controller");
  controller.addAccount("checking", 200, "Checking Account");
  controller.addAccount("saving", 500, "Saving Account");
  controller.addAccount("RRSP", 100, "RRSP Account");
  expect(controller.lowestValue()).toEqual(["RRSP Account", 100]);
});

test("check addCard working", () => {
  const controller = new AccountController("controller");
  let newAccount = controller.addAccount("checking", 200, "Checking Account");
  expect(controller.createNewCard(newAccount).childElementCount).toBe(3);
});

test("check remove working", () => {
  const controller = new AccountController("controller");
  let newAccount = controller.addAccount("checking", 200, "Checking Account");
  expect(controller.removeAccount("checking").length).toBe(0);
});
