// console.log(`Страница Main (60)\nПроверка верстки +7\nВёрстка соответствует макету +35\nТребования к css +6\nИнтерактивность элементов +12\n\nСтраница Pets (40)\nПроверка верстки +7\nВёрстка соответствует макету +15\nТребования к css +4\nИнтерактивность элементов +14`);

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

import { Cards } from './Cards.js';
const data = [
  {
    "id": 0,
    "name": "Jennifer",
    "img": "./images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 1,
    "name": "Sophia",
    "img": "./images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 2,
    "name": "Woody",
    "img": "./images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "id": 3,
    "name": "Scarlett",
    "img": "./images/scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 4,
    "name": "Katrine",
    "img": "./images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 5,
    "name": "Timmy",
    "img": "./images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "id": 6,
    "name": "Freddie",
    "img": "./images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": 7,
    "name": "Charly",
    "img": "./images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]


// Slider
const cardsVisible = document.querySelector('.card__gap-visible');
const cardsPrev=document.querySelector('.card__gap-prev');
const cardsNext=document.querySelector('.card__gap-next');

let cardsNumberActive=[];
let cardsNumberPrev=[];
let cardsNumberNext=[];

renderCardsToDom();

function renderCardsToDom () {
  generateVisibleCards().forEach(card => {
    cardsVisible.appendChild(card);
  });
  generatePrevCards().forEach(card => {
    cardsPrev.appendChild(card);
  });
  generateNextCards().forEach(card => {
    cardsNext.appendChild(card);
  });
}

function generateVisibleCards() {
  let cards=[];
  for (let i=0; i<3; i++) {
    let randomId=randomCard();
    while (cardsNumberActive.includes(randomId)) {
      randomId=randomCard();
    }
    cardsNumberActive.push(randomId);
    cards.push(new Cards(data[randomId]).generateCards())
  }
  return cards;
}

function generatePrevCards() {
  let cards=[];
  for (let i=0; i<3; i++) {
    let randomId=randomCard();
    while (cardsNumberActive.includes(randomId) || cardsNumberPrev.includes(randomId)) {
      randomId=randomCard();
    }
    cardsNumberPrev.push(randomId);
    cards.push(new Cards(data[randomId]).generateCards())
  }
  return cards;
}

function generateNextCards() {
  let cards=[];
  for (let i=0; i<3; i++) {
    let randomId=randomCard();
    while (cardsNumberActive.includes(randomId) || cardsNumberNext.includes(randomId)) {
      randomId=randomCard();
    }
    cardsNumberNext.push(randomId);
    cards.push(new Cards(data[randomId]).generateCards())
  }
  return cards;
}


function randomCard() {
  return Math.floor(Math.random() * 8);
}


// Carousel
const BTN_LEFT=document.querySelector('.left__btn');
const BTN_RIGTH=document.querySelector('.rigth__btn');
const CAROUSEL=document.querySelector('.card__carousel');

BTN_LEFT.addEventListener('click', () => {
  CAROUSEL.classList.add('transition-left');
});

BTN_RIGTH.addEventListener('click', () => {
  CAROUSEL.classList.add('transition-right');
});

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left" || animationEvent.animationName === "move-left-tablet" || animationEvent.animationName === "move-left-mobile") {
    CAROUSEL.classList.remove("transition-left");
    cardsNext.innerHTML=cardsVisible.innerHTML;
    cardsVisible.innerHTML = cardsPrev.innerHTML;
    cardsPrev.innerHTML = "";
    cardsNumberNext=cardsNumberActive;
    cardsNumberActive=cardsNumberPrev;
    cardsNumberPrev=[];
    generatePrevCards().forEach(card => {
      cardsPrev.appendChild(card);
    });
  } else {
    CAROUSEL.classList.remove("transition-right");
    cardsPrev.innerHTML=cardsVisible.innerHTML;
    cardsVisible.innerHTML = cardsNext.innerHTML;
    cardsNext.innerHTML = "";
    cardsNumberPrev=cardsNumberActive;
    cardsNumberActive=cardsNumberNext;
    cardsNumberNext=[];
    generateNextCards().forEach(card => {
      cardsNext.appendChild(card);
    });
  }
});