const inputRef = document.querySelector('#validation-input');

const checkValueInput = (inputText) => {
  const dataLength = Number(inputRef.dataset.length);

  if (inputRef.value.length !== dataLength) {
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.add('valid');
  }
}

const clearInputClass = () => {
  if (inputRef.classList.contains('valid')) {    
    inputRef.classList.remove('valid');
  }
    
  if (inputRef.classList.contains('invalid')) {
    inputRef.classList.remove('invalid');
  }
}

inputRef.addEventListener('blur', checkValueInput);
inputRef.addEventListener('focus', clearInputClass);