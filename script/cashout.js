document
  .getElementById("cash-out-submit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("working button")
    // pin access that
    const pin = document.getElementById("pin-number").value;
    //   converted pin int number
    const convertedPIN = parseInt(pin);

    //AMount take
    const amount = document.getElementById("cash-out-amount").value;
    const convertedAMOUNT = parseInt(amount);
    // Get the Main balance Here
    const main_Balance = document.getElementById("main-balance").innerText;
    const mainBalanceConvert = parseFloat(main_Balance);
    // check that the balance
    if (amount && pin) {
      if (convertedPIN === 1234) {
        console.log(mainBalanceConvert);
        const sum = mainBalanceConvert - convertedAMOUNT;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("Enter valid PIN !!!");
      }
    } else {
      alert("Enter cashout amount !!!");
    }
  });
// logout Button work 
  document.getElementById('log-out').addEventListener('click',function(){
    window.location.href="./index.html"
})
