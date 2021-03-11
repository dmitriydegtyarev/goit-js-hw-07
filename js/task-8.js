const refs = {
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  inputNumber: document.querySelector('input'),
  gallery: document.querySelector('#boxes'),
}

const createBoxes = (amount) => {
  amount = refs.inputNumber.value;

  if (amount < 1 || amount > 100) {
    alert('Введите число от 1 до 100');
    return;
  }

  destroyBoxes();

  const baseSizeBlock = 30;

  for (let i = 0; i < amount; i += 1) {

    const divBox = document.createElement("div");

    const boxSize = baseSizeBlock + i * 10;

    const color = [
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
    ].join(',');

    divBox.style.background = `rgb(${color})`;
    divBox.style.height = `${boxSize}px`;
    divBox.style.width = `${boxSize}px`;
    divBox.style.margin = "10px auto";
    
    refs.gallery.appendChild(divBox);
  }
}

const destroyBoxes = () => {
  refs.gallery.innerHTML = '';
}

refs.renderBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);