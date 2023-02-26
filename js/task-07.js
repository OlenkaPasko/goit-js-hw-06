/*const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});
Напиши скрипт, який реагує на зміну значення 
input#font - size - control(подія input) 
і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
В результаті,
перетягуючи повзунок, буде змінюватися розмір тексту.*/
const input = document.querySelector("input#font-size-control");
const output = document.querySelector("span#text");

const changeOfValue = event => {
    let fontChange = event.currentTarget.min;
    if (changeOfValue > event.currentTarget.min && event.currentTarget.max) {
       output.style.fontSize = changeOfValue;
    }
}
input.addEventListener("input",changeOfValue);