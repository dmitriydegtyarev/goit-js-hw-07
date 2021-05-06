const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector("#text")
}

const { input, span } = refs;

const changeSize = (e) => span.style.fontSize = `${e.target.value}px`;

input.addEventListener("input", changeSize);