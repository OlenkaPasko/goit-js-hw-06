/*Напиши скрипт, який 
під час набору тексту в інпуті input#name - input(подія input),
підставляє його поточне значення в span#name - output. 
Якщо інпут порожній,
 у спані повинен відображатися рядок "Anonymous"
 Розширює синтаксис if таким чином, що якщо умова приводиться до false, 
 виконається код у фігурних дужках після оператора else.

let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}
метод для рядків trim()
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

<input type="text" id="input"> oninput: <span id="result"></span>
<script>
  input.oninput = function() {
    result.innerHTML = input.value;
  };
</script>

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

<input type="text" id="name-input" placeholder="Please enter your name" />
    <h1>Hello, <span id="name-output">Anonymous</span>!</h1>*/

//знайти input#name
//підставити поточне значення
//якщо інпут порожній - рядок "Anonymous"

