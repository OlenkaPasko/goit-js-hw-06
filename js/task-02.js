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
const ingredientsList = document.querySelector("ul#ingredients");
const list = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("listItem");
  return listItem;
});
ingredientsList.append(...list);
//splice(position, 0, new_element_1, new_element_2, ...)
//colors.splice(1, 0, "yellow", "pink")

//const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
//const list = document.querySelector(".list");

//const markup = technologies
  //.map((technology) => `<li class="list-item">${technology}</li>`)
//.join("");

// Check the console, you'll see a single string with HTML tags
//.log(markup);

// Adding all the markup in one operation
//list.innerHTML = markup;



