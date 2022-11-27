const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
const ingredientList = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');

    return itemEl;
  })
};

const elements = ingredientList(ingredients);
ingredientsEl.append(...elements);
console.log(ingredientsEl);
