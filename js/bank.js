document.getElementById("btn-deposite").addEventListener("click", function () {
  const inputDeposite = document.getElementById("deposite-input").value;
  const inputDepositeConvertToNumber = parseFloat(inputDeposite);

  const depositeEmpty = document.getElementById("deposite-input");

  if (inputDeposite == "") {
    alert("Enter taka please");
  
  } 
  else if(inputDeposite=='00' || inputDeposite=='000')
  {
    alert("Please add tk not zero tk..");
    depositeEmpty.value = "";
  }
  
  else {
    // deposite-taka
    const depositeValue = document.getElementById("deposite-taka");
    const previousValue = depositeValue.innerText;
    const previousValueConvertNumber = parseFloat(previousValue);

    depositeValue.innerText = inputDeposite;

    const currentDepostieTotal = 0;
    const total =
      currentDepostieTotal +
      (previousValueConvertNumber + inputDepositeConvertToNumber);

    depositeValue.innerText = total;

    // Step 5:get Balance total
    const balanceTotalString = document.getElementById("balance-total");
    const balanceTotalInnerText = balanceTotalString.innerText;
    balanceTotalConvert = parseFloat(balanceTotalInnerText);
    const totalNumber = inputDepositeConvertToNumber + balanceTotalConvert;
    balanceTotalString.innerText = totalNumber;
    // step 7:clear the deposite field
    depositeEmpty.value = "";
  }
});
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Step 1:Get value from input field
  const withdraw = document.getElementById("withdraw-input").value;
  const withdrawEmpty = document.getElementById("withdraw-input");
  const balanceTotalString = document.getElementById("balance-total");
  const balanceTotalInnerText = balanceTotalString.innerText;
  const balanceTotalConvert = parseFloat(balanceTotalInnerText);
  const inputWithdrawString = document.getElementById("withdraw-input").value;
  const inputDataConvertToNumber = parseFloat(inputWithdrawString);
  if (withdraw == "") {
    alert("Enter something please");
  }
  else if(withdraw=='00' || withdraw=='000')
  {
    alert("Please add tk not zero tk..");
    withdrawEmpty.value = "";
  }
   else {
    if (balanceTotalConvert >= inputDataConvertToNumber) {
      // Step 2:Assign input value into withdraw text
      const withdrawString = document.getElementById("withdraw-total");
      const withdrawInnerText = withdrawString.innerText;
      const constwithdrawConvertToNumber = parseFloat(withdrawString);
      withdrawString.innerText = inputDataConvertToNumber;

      //  step 3: Balance Decrease Part

      const decreaseBalance = balanceTotalConvert - inputDataConvertToNumber;
      balanceTotalString.innerText = decreaseBalance;

      // Step 4: empty withdraw input field
      withdrawEmpty.value = "";
    }
     else {
      alert(
        "You are trying to withdraw that you have not enough in your balance"
      );
      withdrawEmpty.value = "";
    }
  }
});
