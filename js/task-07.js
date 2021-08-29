const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

const onInputChange = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
  // spanEl.style.fontSize = e.currentTarget.value + 'px';
};

inputEl.addEventListener('input', onInputChange); //для текстовых полей
// inputEl.addEventListener('change', onInputChange); //для радиобат.  и чебоксов
