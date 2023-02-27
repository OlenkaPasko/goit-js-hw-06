const textInput = document.querySelector("#validation-input");
const contentsInput = (event) => {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
};
textInput.addEventListener("blur", contentsInput);
