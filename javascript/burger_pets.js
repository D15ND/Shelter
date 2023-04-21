// Burger
const burgerBtn=document.querySelector('.burger');
const navigationList=document.querySelector('.header__navigation');
const body=document.body;
const nav=document.querySelector('.navigation__list');
const shadow=document.querySelector('.shadow');

burgerBtn.addEventListener('click', function () {
  navigationList.classList.toggle('header__navigation_active');
  burgerBtn.classList.toggle('burger_active');
  body.classList.toggle('body_active');
  shadow.classList.toggle('shadow_active');
});

nav.addEventListener('click',  function (event) {
  if (event.target.classList.contains('navigation__link') || event.target.classList.contains('navigation__title')) {
    navigationList.classList.toggle('header__navigation_active');
    burgerBtn.classList.toggle('burger_active');
    body.classList.toggle('body_active');
    shadow.classList.toggle('shadow_active');
  }
});

shadow.addEventListener('click', function() {
  navigationList.classList.toggle('header__navigation_active');
  burgerBtn.classList.toggle('burger_active');
  body.classList.toggle('body_active');
  shadow.classList.toggle('shadow_active');
});