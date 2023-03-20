// form
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");

function addError(parent) {
  parent.classList.remove("success");
  parent.classList.add("error");
}

function checkNumber() {
  let number = document.getElementById("number").value;
  let numMessage = document.getElementById("nummessage");
  if (number.length != 0) {
    if (number.length == 11) {
      nummessage.textContent = "successful";
      nummessage.style.color = "green";
    } else {
      nummessage.textContent = "you need 11 symbol!";
      nummessage.style.color = "red";
    }
  }
}

function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  // console.log(password, confirmPassword);
  let message = document.getElementById("message");

  if (password.length != 0) {
    if (password == confirmPassword) {
      message.textContent = "Passwords match";
      message.style.color = "green";
    } else {
      message.textContent = "Passwords don't match!";
      message.style.color = "red";
    }
  }
}

function checkEmail() {
  const parent = emailInput.parentElement;
  if (emailInput.value == "") {
    addError(parent);
    parent.querySelector(".error-message").innerText = "email is required";
    return false;
  } else if (!/@gmail.com$/.test(emailInput.value)) {
    addError(parent);
    parent.querySelector(".error-message").innerText =
      "email ending must be '@gmail.com'";
    return false;
  } else {
    parent.classList.remove("error");
    parent.classList.add("success");
    parent.querySelector(".error-message").innerText = "";
    return true;
  }
}
