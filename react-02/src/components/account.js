import React, { Component } from "react";
class ReactAccount extends Component {
  render() {
    return (
      <div className="container">
        <div className="split left" id="left">
          <h3>Add Account</h3>
          <h5 className="leftInput">Account Type:</h5>
          <form>
            <select id="addType1" name="your account">
              <option value="checking">Checking Account</option>

              <option value="saving">Saving Account</option>

              <option value="rrsp">RRSP</option>

              <option value="tfsa">TFSA</option>
            </select>
          </form>
          <button className="money money5" id="btn4">
            Add
          </button>
          <div>
            <h3>Account Summary</h3>
            <h5>
              Total of your account:<span id="totalAmount"></span>
            </h5>
            <h5>
              Hightest value account:<span id="highest"></span>
            </h5>
            <h5>
              Lowest Value account account:<span id="lowest"></span>
            </h5>
          </div>
        </div>
        <div id="accArea" className="split right">
          <h3>Account Imformation</h3>

          <button className="money" id="btn1">
            Deposit
          </button>
          <button className="money money2" id="btn2">
            Withdraw
          </button>

          <br />
          <input type="text" id="int1" />
          <form>
            <select name="your account" id="rightSelect"></select>
          </form>
        </div>
      </div>
    );
  }
}

export default ReactAccount;
