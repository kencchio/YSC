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
