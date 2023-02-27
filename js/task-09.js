function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const backgColor = document.querySelector(".color");
const changeBtnColor = document.querySelector(".change-color");
const body = document.body;

const changeColor = () => {
  backgColor.textContent = body.style.backgroundColor = getRandomHexColor();
};
changeBtnColor.addEventListener("click", changeColor);
