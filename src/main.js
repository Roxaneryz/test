
const formElem = document.querySelector("form");
const inputElem = formElem.elements.numberInput;
const btn = formElem.querySelector("button");


inputElem.addEventListener("input", () => {
  const value = parseInt(inputElem.value.trim(), 10);

  if (value > 10) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

formElem.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const value = parseInt(inputElem.value.trim(), 10);

  //  if (isNaN(value) || value <= 10) {
  //    alert("Please enter a number bigger than 10.");
  //    return;
  //  }

  const formData = {
    number: value,
  };

  console.log(formData);
  formElem.reset();
  btn.disabled = true;
});
