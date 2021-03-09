const decrementBtnRef = document.querySelector("[data-action='decrement']");
const incrementBtnRef = document.querySelector("[data-action='increment']");
const valueRef = document.querySelector('#value');

let counterValue = 0;

const increment = () => {  
  valueRef.textContent = counterValue += 1;
};
const decrement = () => {
  valueRef.textContent = counterValue -= 1
};

decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);