// добавление коллекции элементов через JS. в осн делается через функцию-вар.3

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.getElementById('ingredients');
const newArr = [];

ingredients.forEach(item => {
  const createLiEl = document.createElement('li');

  createLiEl.textContent = item;
  newArr.push(createLiEl);
});

ulEl.append(...newArr); 