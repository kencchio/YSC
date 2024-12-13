const form = document.querySelector("form");
const userList = [
  {
    username: "Ana_Rodriguez",
    email: "ana.rodriguez@example.com",
    contact: "09187654321",
  },
  {
    username: "Juan_Delacruz",
    email: "juan.delacruz@example.com",
    contact: "09198765432",
  },
];

let tableList = document.querySelector("#table-list");

function display() {
  tableList.innerHTML = "";
  for (user in userList) {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${userList[user].username}</td>
    <td>${userList[user].email}</td>
    <td>${userList[user].contact}</td>`;
    tableList.appendChild(newRow);
  }
  console.log("displayed");
}

display();

// FormValidation
let usernamePattern = /^(?=.{3,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/;
let emailPattern = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
let contactPattern = /^09[0-9]{9}$/;
let passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
// password must contain 1 number (0-9)
// password must contain 1 uppercase letters
// password must contain 1 lowercase letters
// password must contain 1 non-alpha numeric number
// password is 8-16 characters with no space

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let usernameValue = form.username.value;
  let emailValue = form.email.value;
  let contactValue = form.contact.value;
  let passwordValue = form.password.value;

  if (usernamePattern.test(usernameValue) && emailPattern.test(emailValue) && contactPattern.test(contactValue) && passwordPattern.test(passwordValue)) {
    console.log("wow");
    let message = document.querySelector("#message");

    message.innerHTML = `
    <b>Success!</b> User was registered successfully.
    <button type="button" class="close" aria-label="Close" onclick="this.parentElement.style.display='none';">
    <span aria-hidden="true">❌</span>
    </button>`;
    message.setAttribute("style", "display:inline");
    message.setAttribute("class", "alert alert-success alert-dismissible fade show message-style");

    let formData = {
      username: usernameValue,
      email: emailValue,
      contact: contactValue,
    };

    console.log(formData);
    userList.push(formData);
    display();
    console.log("success");
  } else {
    message.innerHTML = `
    <b>Error!</b> User registration failed.
    <button type="button" class="close" aria-label="Close" ">
    <span aria-hidden="true">❌</span>
    </button>`;
    message.setAttribute("style", "display:inline");
    message.setAttribute("class", "alert alert-warning alert-dismissible fade show message-style");
    console.log("error");
  }

  form.reset();
});

function reset() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("password").value = "";
}

//KeyupEventValidation

username.addEventListener("keyup", (event) => {
  let usernameIsValid = usernamePattern.test(event.target.value);
  if (usernameIsValid) {
    form.username.setAttribute("class", "form-control valid");
  } else {
    form.username.setAttribute("class", "form-control invalid");
  }
});

email.addEventListener("keyup", (event) => {
  let emailIsValid = emailPattern.test(event.target.value);
  if (emailIsValid) {
    form.email.setAttribute("class", "form-control valid");
  } else {
    form.email.setAttribute("class", "form-control invalid");
  }
});

contact.addEventListener("keyup", (event) => {
  let contactIsValid = contactPattern.test(event.target.value);
  if (contactIsValid) {
    form.contact.setAttribute("class", "form-control valid");
  } else {
    form.contact.setAttribute("class", "form-control invalid");
  }
});

password.addEventListener("keyup", (event) => {
  let passwordIsValid = passwordPattern.test(event.target.value);
  if (passwordIsValid) {
    form.password.setAttribute("class", "form-control valid");
  } else {
    form.password.setAttribute("class", "form-control invalid");
  }
});
