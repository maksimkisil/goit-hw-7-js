const refs = {
  inputEl: document.getElementById('name-input'), //input
  spanEl: document.getElementById('name-output'), //span
};

// onInputChange - функция обработчик события
const onInputChange = inputName => {
  let textInput = 'незнакомец';

  textInput = refs.inputEl.value || 'незнакомец';
  refs.spanEl.textContent = textInput;

  // inputEl.value === ''
  //   ? (spanEl.textContent = 'незнакомец')
  //   : (spanEl.textContent = inputName.target.value);

  return inputName;
};

refs.inputEl.addEventListener('input', onInputChange);
