import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryAddItems = galleryItems.map(item => {
  return `<a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt="${item.description}"
    />
  </a>`;
})

const gallJoin = galleryAddItems.join('');
gallery.insertAdjacentHTML('afterbegin', gallJoin);

gallery.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `)

  instance.show();
  
  gallery.addEventListener('keydown', event => {
    if (event.code === "Escape") {
      instance.close();
    
      gallery.removeEventListener('keydown', event);
    }
  })
})
