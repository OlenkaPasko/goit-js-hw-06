//<div id="counter">
  //<button type="button" data-action="decrement">
   // -1
  //</button>
  //<span id="value">0</span>
  //<button type="button" data-action="increment">
    //+1
  //</button>
//</div>;
//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.
const increment = document.querySelector([`data-action="increment`]);
const decrement = document.querySelector([`data-action="decrement`]);

let counterValue = 0;

increment.addEventListener(`click`);
decrement.addEventListener(`click`);



