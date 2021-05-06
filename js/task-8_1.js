const refs = {
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  input: document.querySelector('input'),
  divContainer: document.querySelector('#boxes'),
}

const { renderBtn, destroyBtn, input, divContainer } = refs;

let baseSizeBlock = 30;
let boxSize = 0;

function compareSizeBlock() {
  boxSize < baseSizeBlock ? baseSizeBlock = 30 : baseSizeBlock = boxSize + 10
}

const generateRandomColor = () => {
  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)

  return `rgb(${r},${g},${b})`
}

const destroyBoxes = () => {
  divContainer.innerHTML = '';
  input.value = '';
  baseSizeBlock = 30;
}

const createBoxes = (amount) => {

  if (amount < 1 || amount > 100) {
    alert('Введите число от 1 до 100');
    return;
  }

  const boxes = [...new Array(amount)]
  const arrayBoxes = boxes.map((_, i) => createOneBox(i))

  divContainer.append(...arrayBoxes)

  compareSizeBlock()
}

function createOneBox(i) {
  const divBox = document.createElement('div')

  boxSize = i * 10 + baseSizeBlock;

  divBox.style.background = generateRandomColor()
  divBox.style.height = `${boxSize}px`
  divBox.style.width = `${boxSize}px`
  divBox.style.margin = "10px auto"

  return divBox
}

renderBtn.addEventListener('click', () => createBoxes(+input.value));
destroyBtn.addEventListener('click', destroyBoxes);