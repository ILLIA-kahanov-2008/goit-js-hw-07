const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('ul#ingredients');
// console.log(ingredientsList);
let ingredientItem;
  
ingredients.forEach(ingredient => {
  ingredientItem = document.createElement('li');
  ingredientItem.textContent = `${ingredient}`;
  ingredientsList.appendChild(ingredientItem)
});