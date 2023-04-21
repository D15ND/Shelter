export class Cards {
  constructor({id, name, img, ...rest}) {
    this.id=id;
    this.name=name;
    this.img=img;
  }

  generateCards() {
    let template='';
    let cards=document.createElement('div');
    cards.className='card';
    cards.setAttribute('data-id', this.id);

    this.img &&
    (template += `<img class="card__img" src="${this.img}" alt="imgHere">`);

    template += `<p class="animal__name">${this.name}</p>`;
    template += `<button class="learn__btn">Learn more</button>`;

    cards.innerHTML=template;
    return cards;
  }
}
