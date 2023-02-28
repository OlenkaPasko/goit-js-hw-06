const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const getInput = (event) => {
  nameOutput.textContent =
    nameInput.value !== "" ? event.currentTarget.value : "Anonymous";
};
nameInput.addEventListener("input", getInput);
