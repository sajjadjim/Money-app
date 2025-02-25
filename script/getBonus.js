document
  .getElementById("get-bonus-submit")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //Bonus Code
    const BonusCode = document.getElementById("coupon-code").value;

    const main_Balance = document.getElementById("main-balance").innerText;
    const mainBalanceConvert = parseFloat(main_Balance);
    console.log("BonusCode");
    // check that the balance
    if (BonusCode === "bonus10") {
      console.log("You get extra 10% Bonus");
      const sum = mainBalanceConvert + 1000;
      document.getElementById("main-balance").innerText = sum;
    }
    if (BonusCode === "bonus20") {
      console.log("You get extra 10% Bonus");
      const sum = mainBalanceConvert + 2000;
      document.getElementById("main-balance").innerText = sum;
    }
    if (BonusCode === "bonus30") {
      console.log("You get extra 10% Bonus");
      const sum = mainBalanceConvert + 3000;
      document.getElementById("main-balance").innerText = sum;
    } else {
      alert("Enter coupon !!!");
    }
  });
// logout Button work
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});
