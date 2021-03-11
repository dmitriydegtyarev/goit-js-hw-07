const refs = {
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  inputNumber: document.querySelector('input'),
  gallery: document.querySelector('#boxes'),
  div: document.createElement('div'),
}

console.log(refs.inputNumber);

refs.gallery.append(refs.div);
// refs.gallery.append(refs.div);
// refs.gallery.append(refs.div);

refs.div.insertAdjacentHTML("afterbegin", `<div></div><div></div><div></div><div></div>`);

refs.renderBtn.addEventListener('click', renderGallery);
refs.destroyBtn.addEventListener('click', clearGallery);