const refs = {
  inputEl: document.querySelector('#controls input'),
  btnRenderEl: document.querySelector("[data-action='render']"),
  btnDestroyEl: document.querySelector("[data-action='destroy']"),
  divBoxesEl: document.getElementById('boxes'),
};


let amount = 0;


function createOneBoxes() {
  refs.inputEl.value = +refs.inputEl.value + 1;
  createBoxes();
}
refs.btnRenderEl.addEventListener('click', createOneBoxes);

// добавить по клику
function createBoxes() {
  let size = 30;
  const newArr = [];

  let children = refs.divBoxesEl.children;
  const childrenLength = children.length;

  amount = +refs.inputEl.value;

  const createNewArray = new Array(amount);
  createNewArray.fill('');

  createNewArray.forEach((_, i) => {
    size += 10;

    // добавить дивы
    if (i > childrenLength - 1) {
      const createDivEl = document.createElement('div');
      createDivEl.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
      createDivEl.style.width = `${size}px`;
      createDivEl.style.height = `${size}px`;
      newArr.push(createDivEl);
    }
  });

  // удалить число в инпуте
  if (amount < childrenLength) {
    const newArray = new Array(childrenLength);
    newArray.fill('');

    newArray.forEach((_, index) => {
      if (index > amount - 1) {
        refs.divBoxesEl.removeChild(children[index]);
      }
    });
  }

  refs.divBoxesEl.append(...newArr);
}
refs.inputEl.addEventListener('change', createBoxes);

// очистить по клику
function destroyBoxes() {
  refs.divBoxesEl.innerHTML = '';
  refs.inputEl.value = '';
}
refs.btnDestroyEl.addEventListener('click', destroyBoxes);

// генерация рандомного числа
function randomNumber() {
  return Math.round(Math.random() * (100 - 0) + 0);
}


