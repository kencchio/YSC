//removes e, +, - from input type number
var numberInput = document.getElementById("phone-number");

var invalidChars = ["-", "+", "e"];

numberInput.addEventListener("keydown", function (e) {
  this.value = this.value.replace(/[e\+\-]/gi, "");
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

//disables scrolling in input type number
document.addEventListener("wheel", function (event) {
  if (document.activeElement.type === "number") {
    document.activeElement.blur();
  }
});

const form = document.querySelector("form");

const nameInp = document.getElementById("name");
const nameErr = document.querySelector(".name-error");
const emailInp = document.getElementById("email");
const emailErr = document.querySelector(".email-error");
const orderInp = document.getElementById("order-number");
const orderErr = document.querySelector(".order-error");
const phoneInp = document.getElementById("phone-number");
const phoneErr = document.querySelector(".phone-error");
const concernInp = document.getElementById("concern");
const messageInp = document.getElementById("message");

const namePatt = /^[A-Z][a-zA-Z\s]*$/;
const emailPatt = /^[^@]+@[^@]+\.[^@]+$/;
const orderPatt =
  /^(20[0-2][0-9])(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])([0-9]{4})$/;
const phonePatt = /^09\d{9}$/;

nameInp.addEventListener("keyup", (event) => {
  if (namePatt.test(nameInp.value)) {
    nameInp.setAttribute(
      "style",
      "border: solid 1px var(--variable-collection-gray-600);"
    );
    nameErr.setAttribute("style", "display: none;");
  } else {
    nameInp.setAttribute(
      "style",
      "border: solid 1px var(--variable-collection-danger)"
    );
    nameErr.setAttribute("style", "display: inline;");
  }
});

emailInp.addEventListener("keyup", (event) => {
  if (emailPatt.test(emailInp.value)) {
    emailInp.setAttribute(
      "style",
      "border: solid 1px var(--variable-collection-gray-600);"
    );
    emailErr.setAttribute("style", "display: none;");
  } else {
    emailInp.setAttribute(
      "style",
      "border: solid 1px var(--variable-collection-danger)"
    );
    emailErr.setAttribute("style", "display: inline;");
  }
});

orderInp.addEventListener("keyup", (event) => {
  if (orderPatt.test(orderInp.value)) {
    orderInp.setAttribute(
      "style",
      "border: solid 1px var(--variable-collection-gray-600);"
    );
    orderErr.setAttribute("style", "display: none;");
  } else {
    orderInp.setAttribute(
      "style",
      "border: solid 1px var(--variable-collection-danger)"
    );
    orderErr.setAttribute("style", "display: inline;");
  }
});

phoneInp.addEventListener("keyup", (event) => {
  if (phonePatt.test(phoneInp.value)) {
    phoneInp.setAttribute(
      "style",
      "border: solid 1px var(--variable-collection-gray-600);"
    );
    phoneErr.setAttribute("style", "display: none;");
  } else {
    phoneInp.setAttribute(
      "style",
      "border: solid 1px var(--variable-collection-danger)"
    );
    phoneErr.setAttribute("style", "display: inline;");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // let nameValue = nameInp.value;
  // let emailValue = emailInp.value;
  // let orderValue = orderInp.value;
  // let phoneValue = phoneInp.value;
  // let concernValue = concernInp.value;
  // let messageValue = messageInp.value;

  let nameValid = namePatt.test(nameInp.value);
  let emailValid = emailPatt.test(emailInp.value);
  let orderValid = orderPatt.test(orderInp.value);
  let phoneValid = phonePatt.test(phoneInp.value);
  let concernValid = concernInp.value != "null";
  let messageValid = messageInp.value != "";

  let errorMess = document.querySelector(".form-error");
  let successMess = document.querySelector('.form-success');

  if (
    nameValid &&
    emailValid &&
    orderValid &&
    phoneValid &&
    concernValid &&
    messageValid
  ) {
    errorMess.setAttribute("style", "display: none;");
    successMess.setAttribute('style', 'display: inline;')
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = ""; 
    document.getElementById("order-number").value = ""; 
    document.getElementById("phone-number").value = "";
    document.getElementById("concern").selectedIndex = 4;
    document.getElementById("message").value = "";
  } else {
    errorMess.setAttribute("style", "display:inline;");
    successMess.setAttribute('style', 'display: none;')
  }
});
