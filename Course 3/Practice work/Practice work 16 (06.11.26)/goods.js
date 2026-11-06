let goods = [{
    name: 'Велосипед BM-20t',
    description: 'Горный велосипед с алюминиевой рамой и 21 скоростью.',
    img: 'img/bm20t.jpg',
    price: 21000,
    promo: 'Скидка 10% при заказе от 2 штук'
  },
  {
    name: 'Самокат City Rider',
    description: 'Городской самокат со складной рамой.',
    img: 'img/scooter.jpg',
    price: 8900,
    promo: ''
  },
  {
    name: 'Наушники SoundPro',
    description: 'Беспроводные наушники с шумоподавлением.',
    img: 'img/headphones.jpg',
    price: 6500,
    promo: 'Подарок при покупке'
  },
  {
    name: 'Клавиатура KeyMaster',
    description: 'Механическая клавиатура с RGB-подсветкой.',
    img: 'img/keyboard.jpg',
    price: 7400,
    promo: ''
  },
  {
    name: 'Мышь GameMouse X',
    description: 'Игровая мышь с регулируемой чувствительностью.',
    img: 'img/mouse.jpg',
    price: 3200,
    promo: 'Скидка 15%'
  },
  {
    name: 'Рюкзак TravelPack',
    description: 'Городской рюкзак с отделением для ноутбука.',
    img: 'img/backpack.jpg',
    price: 4900,
    promo: ''
  }
];
let goodsList = document.querySelector('.goods-list');
let modal = document.querySelector('#order-modal');
let modalText = document.querySelector('.modal__text');
let modalClose = document.querySelector('.modal__close');
let modalButton = document.querySelector('.modal__button');
function createCard(good) {
  let card = document.createElement('li');
  card.classList.add('card');
  if (good.promo !== '') {
    card.classList.add('card--promo');
  }
  let image = document.createElement('img');
  image.classList.add('card__image');
  image.src = good.img;
  image.alt = good.name;
  let title = document.createElement('h2');
  title.classList.add('card__title');
  title.textContent = good.name;
  let description = document.createElement('p');
  description.classList.add('card__description');
  description.textContent = good.description;
  let price = document.createElement('p');
  price.classList.add('card__price');
  price.textContent = good.price + ' ₽';
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  if (good.promo !== '') {
    let promo = document.createElement('p');
    promo.classList.add('card__promo');
    promo.textContent = good.promo;
    card.appendChild(promo);
  }
  let favoriteMessage = document.createElement('p');
  favoriteMessage.classList.add('card__favorite-message');
  favoriteMessage.classList.add('hidden');
  favoriteMessage.textContent = 'Товар добавлен в избранное';
  let actions = document.createElement('div');
  actions.classList.add('card__actions');
  let favoriteButton = document.createElement('button');
  favoriteButton.classList.add('card__button');
  favoriteButton.classList.add('card__favorite');
  favoriteButton.type = 'button';
  favoriteButton.textContent = 'В избранное';
  let orderButton = document.createElement('button');
  orderButton.classList.add('card__button');
  orderButton.classList.add('card__order');
  orderButton.type = 'button';
  orderButton.textContent = 'Заказать';
  favoriteButton.addEventListener('click', function () {
    favoriteMessage.classList.remove('hidden');
  });
  orderButton.addEventListener('click', function () {
    modalText.textContent = 'Вы хотите заказать: ' + good.name + '. Стоимость: ' + good.price + ' ₽';
    modal.classList.remove('hidden');
  });
  actions.appendChild(favoriteButton);
  actions.appendChild(orderButton);
  card.appendChild(favoriteMessage);
  card.appendChild(actions);
  return card;
}
for (let i = 0; i < goods.length; i++) {
  let card = createCard(goods[i]);
  goodsList.appendChild(card);
}
modalClose.addEventListener('click', function () {
  modal.classList.add('hidden');
});
modalButton.addEventListener('click', function () {
  modal.classList.add('hidden');
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.classList.add('hidden');
  }
});