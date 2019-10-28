import { Account } from './functions.js';


test('class account', ()=>{
  const acc = new Account('checking',1);
    acc.deposit(100);
    expect(acc.balance1()).toBe(101)
    acc.withdraw(50);
    expect(acc.balance1()).toBe(51)
    });