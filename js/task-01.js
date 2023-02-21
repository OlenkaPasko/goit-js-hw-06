//const clients = ["Mango", "Ajax", "Poly"];

//for (const client of clients) {
 // console.log(client);
//}

//const string = "javascript";

//for (const character of string) {
 // console.log(character);
//}
//const listWithId = document.querySelector('#menu');
//listWithId.style.textTransform = 'uppercase';
///listWithId.style.fontSize = '24px';
//console.log(listWithId);

const categoriesList = document.querySelector("ul#categories");

const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

for (const item of categoriesItems) {
  const categoriesName = item.querySelector("h2").textContent;
  const categoriesElements = item.querySelectorAll("li").length;
  console.log(`Category: ${categoriesName}`);
  console.log(`Elements: ${categoriesElements}`);
}
