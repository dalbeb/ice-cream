'use strict';

const btnCloseElement = document.querySelector('#menu-btn-close');
const btnOpenElement = document.querySelector('#menu-btn-open');
const navElement = document.querySelector('#nav');
const bodyElement = document.querySelector('body');

btnCloseElement.addEventListener('click', () => {
  btnCloseElement.classList.remove('active');
  btnOpenElement.classList.add('active');
  navElement.classList.remove('active');
  bodyElement.classList.remove('no-scroll');
});

btnOpenElement.addEventListener('click', () => {
  btnCloseElement.classList.add('active');
  btnOpenElement.classList.remove('active');
  navElement.classList.add('active');
  bodyElement.classList.add('no-scroll');
});
