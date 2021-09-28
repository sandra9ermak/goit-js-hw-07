import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryAddItems = galleryItems.map(item => {
  return `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt="${item.description}" />
    </a>`;
})

const gallJoin = galleryAddItems.join('');
gallery.insertAdjacentHTML('afterbegin', gallJoin);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});