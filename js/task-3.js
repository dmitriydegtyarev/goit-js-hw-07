import imagesList from './task-3_images.js';

const galleryRef = document.querySelector('#gallery');

const createImage = ({ url, alt }) => {
  return `<li><img class="gallery__img" src="${url}" alt="${alt}"/></li>`;
}

const createImageList = (imagesList) => imagesList.map(createImage).join('');

const addItemsToGallery = (el, template) => {
  el.insertAdjacentHTML('beforeend', template);
};

const template = createImageList(imagesList);

addItemsToGallery(galleryRef, template);