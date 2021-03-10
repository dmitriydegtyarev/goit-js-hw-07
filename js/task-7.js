const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector("#text");

const changeSize = (e) => textRef.style.fontSize = `${e.target.value}px`;

inputRef.addEventListener("input", changeSize);