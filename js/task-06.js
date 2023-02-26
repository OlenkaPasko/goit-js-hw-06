/*const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});*/
/*скрипт, який під час втрати фокусу на інпуті
(подія blur), перевіряє його вміст щодо правильної 
кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

-Яка кількість символів повинна бути в інпуті,
зазначається в його атрибуті data - length.
-Якщо введена правильна кількість символів,
то border інпуту стає зеленим,
-якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS - класи 
valid і invalid, які ми вже додали у вихідні файли завдання.
contentsInput - вхід вмісту*/
const textInput = document.querySelector("#validation-input");
const contentsInput = event => {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
}
textInput.addEventListener("blur", contentsInput);