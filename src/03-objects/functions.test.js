import { Account, AccountController } from './functions.js';


test('class account', ()=>{
  let acc = new Account('checking',1);
    acc.deposit(100);
    expect(acc.balance1()).toBe(101)
    acc.withdraw(50);
    expect(acc.balance1()).toBe(51)
    });

test('check create account1', () =>{
  const controller = new AccountController('controller');
  controller.addAcc('checking', 0);
  expect(controller.accounts[0].name).toBe('checking');
  controller.addAcc('saving', 0);
  expect(controller.accounts[1].name).toBe('saving');
  });