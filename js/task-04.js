let counterValue = 0;
const increment = document.querySelector(`[data-action = "increment"]`);
const decrement = document.querySelector(`[data-action = "decrement"]`);
const valueRef = document.getElementById("value");

const clickDecrement = (event) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const clickIncrement = (event) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
decrement.addEventListener("click", clickDecrement);
increment.addEventListener("click", clickIncrement);
