const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameOutput.addEventListener("input", (event) => {
  nameInput.textContent = inputValue === "" ? "Anonimous" : inputValue;
});
