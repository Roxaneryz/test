const { default: iziToast } = require("izitoast");

const formElem = document.querySelector("form");
const inputElem = formElem.elements.numberInput;
const btn = formElem.document.querySelector("btn");

const value = perseInt(number.value.trim(), 10);

numberInput.addEventListener("input", () => {
  value;

  if (value > 10) {
    btn.disabled = false;
  } else {
    btn.disable = true;
  }
});

formElem.addEventListener("submit", function (ev) {
  ev.preventDefault();
  value;
  if (value <= 10) {
    iziToast.error({
      title: "Error",
      message: "Please enter a number bigger than 10.",
      position: "topCenter",
      backgroundColor: "#e74c3c",
      color: "#fff",
      timeout: 3000,
    });
    return;
  }

  const formData = {
    number: value,
  };

  console.log(formData);
  this.reset();
  btn.disable = true;
});
