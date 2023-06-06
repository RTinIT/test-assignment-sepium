import { HTMLElement } from "./HTMLElement.js";

const sliderList = document.querySelector('.slider__list');
const buttonPrev = document.querySelector('.slider__button_prev');
const buttonNext = document.querySelector('.slider__button_next');
const galleryImage = document.querySelector('.gallery__image');

function addItem(src, dest = '') {
  const item = new HTMLElement(
    dest ? null : sliderList,
    'li',
    'slider__item slider__item_enter'
  );

  const image = new HTMLElement(
    item.node,
    'img',
    'slider__image image slider__image_small'
  );

  image.setAttributes({src, alt: 'Кафе Пекарня'});

  dest && sliderList.prepend(item.node);
}

function next() {
  const sliderItems = document.querySelectorAll('.slider__item');
  const src = sliderItems[0].children[0].getAttribute('src');

  sliderItems[0].classList.add('slider__item_exit');

  setTimeout(() => {
    sliderItems[0].remove();
    addItem(src);
  }, 250);

}

function prev() {
  const sliderItems = [...document.querySelectorAll('.slider__item')];
  const src = sliderItems.at(-1).children[0].getAttribute('src');

  sliderItems.at(-1).classList.add('slider__item_exit');

  setTimeout(() => {
    sliderItems.at(-1).remove();
    addItem(src, "prepend");
  }, 250);

}

function showImage(event) {
  if (event.target.classList.contains('slider__image')) {
    galleryImage.setAttribute('src', event.target.src);

    const sliderItems = [...document.querySelectorAll('.slider__item')];

    sliderItems.forEach((item) => {
      item.children[0].classList.remove('slider__image_active');
    })

    event.target.classList.add('slider__image_active');
  }
}

sliderList.addEventListener('click', showImage);
buttonNext.addEventListener('click', next);
buttonPrev.addEventListener('click', prev);