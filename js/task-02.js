//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector(".ingredients");
const ingredientsItems = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});
console.log(ingredientsList);

//const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
//const list = document.querySelector(".list");

//const markup = technologies
  //.map((technology) => `<li class="list-item">${technology}</li>`)
//.join("");

// Check the console, you'll see a single string with HTML tags
//.log(markup);

// Adding all the markup in one operation
//list.innerHTML = markup;



