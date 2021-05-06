const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output')
}

const { input, span } = refs;

const changeSpanOutputText = (inputText) => {
  if (inputText.currentTarget.value.length > 0) {
    span.textContent = inputText.currentTarget.value;
  } else {
    span.textContent = 'незнакомец';
  }
};

input.addEventListener("input", changeSpanOutputText);