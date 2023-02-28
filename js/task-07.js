const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

output.style.fontSize = `${input.value}px`;

const changeOfValue = (event) => {
  output.style.fontSize = `${event.target.value}px`;
};
input.addEventListener("input", changeOfValue);
