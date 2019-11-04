import { Account, AccountController } from "./functions.js";

var controller = new AccountController();

btn1.addEventListener("click", () => {
  let balance = controller.accountOperation(
    rightSelect.value,
    parseFloat(int1.value),
    "deposit"
  );
  document.getElementById(rightSelect.value + "h4").textContent =
    "Your Balance: $" + balance;
  totalAmount.textContent = "$" + controller.totalBalance();
  let height = controller.heighestValue();
  highest.textContent = height[0] + " $" + height[1];
  let lowt = controller.lowestValue();
  lowest.textContent = lowt[0] + " $" + lowt[1];
  int1.value = "";
});

btn2.addEventListener("click", () => {
  let balance = controller.accountOperation(
    rightSelect.value,
    parseFloat(int1.value),
    "withdraw"
  );
  document.getElementById(rightSelect.value + "h4").textContent =
    "Your Balance: $" + balance;
  totalAmount.textContent = "$" + controller.totalBalance();
  let height = controller.heighestValue();
  highest.textContent = height[0] + " $" + height[1];
  let lowt = controller.lowestValue();
  lowest.textContent = lowt[0] + " $" + lowt[1];
  int1.value = "";
});

btn4.addEventListener("click", () => {
  let newAccount = controller.addAccount(
    addType1.value,
    0,
    addType1.options[addType1.selectedIndex].text
  );
  if (newAccount) {
    let newCard = controller.createNewCard(newAccount);
    accArea.appendChild(newCard);
    rightSelect.innerHTML = controller.replaceOption();
  }
  totalAmount.textContent = "$" + controller.totalBalance();
  let height = controller.heighestValue();
  highest.textContent = height[0] + " $" + height[1];
  let lowt = controller.lowestValue();
  lowest.textContent = lowt[0] + " $" + lowt[1];
});

document.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("remove")) {
    if (!confirm("Are you sure you want to remove this account?")) return;
    controller.removeAccount(e.target.closest(".acc").id);
    e.target.closest(".acc").remove();
    totalAmount.textContent = "$" + controller.totalBalance();
    let height = controller.heighestValue();
    highest.textContent = height[0] + " $" + height[1];
    let lowt = controller.lowestValue();
    lowest.textContent = lowt[0] + " $" + lowt[1];
  }
});
