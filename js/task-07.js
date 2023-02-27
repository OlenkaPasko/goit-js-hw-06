const input = document.querySelector("input#font-size-control");
const output = document.querySelector("span#text");

const changeOfValue = (event) => {
  let fontChange = event.currentTarget.min;
  if (
    changeOfValue > event.currentTarget.min &&
    event.currentTarget.max + "px"
  ) {
    output.style.fontSize = changeOfValue;
  }
};
input.addEventListener("input", changeOfValue);
