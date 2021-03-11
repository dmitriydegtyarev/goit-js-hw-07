const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const changeSpanOutputText = (inputText) => {
  if (inputText.currentTarget.value.length > 0) {
    spanRef.textContent = inputText.currentTarget.value;
  } else {
    spanRef.textContent = 'незнакомец';
  }
};

inputRef.addEventListener("input", changeSpanOutputText);