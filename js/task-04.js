//паттерн объект ссылок
const refs = {
  spanEl: document.getElementById('value'),
  btnDecrementEl: document.querySelector("[data-action='decrement']"),
  btnIncremetEl: document.querySelector("[data-action='increment']"),
};

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  refs.spanEl.textContent = counterValue;
  // counterValueRef.textContent = counterValue -= 1;
};
const incremet = () => {
  counterValue += 1;
  refs.spanEl.textContent = counterValue;
  // counterValueRef.textContent = counterValue += 1;
};

refs.btnDecrementEl.addEventListener('click', decrement);
refs.btnIncremetEl.addEventListener('click', incremet);
