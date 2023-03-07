// Step ---1:add click event listener with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step 2: Get email address value
  const emailValue = document.getElementById("email");
  const emailPassValue = emailValue.value;
  const passValue = document.getElementById("pass");
  const passPassValue = passValue.value;
  //  step 2 check my email and pass:
  if (
    emailPassValue == "simantasarker0000@gmail.com" &&
    passPassValue =='12345'
  ) {

    location.href = "bank.html";
  } else {
    alert("valid password de ..Sala ekta tui");
    emailValue.value='';
    passValue.value=''
  }
});








