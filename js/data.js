import {getRndInteger, getRndFloat, getRndArrayElement, getRndArrayFromArray} from './utils.js';

const avatarUsers = [
  'img/avatars/user{{01}}.png',
  'img/avatars/user{{02}}.png',
  'img/avatars/user{{03}}.png',
  'img/avatars/user{{04}}.png',
  'img/avatars/user{{05}}.png',
  'img/avatars/user{{06}}.png',
  'img/avatars/user{{07}}.png',
  'img/avatars/user{{08}}.png',
  'img/avatars/user{{09}}.png',
  'img/avatars/user{{10}}.png',
];

const adTitles = [
  'Заголовок 1',
  'Заголовок 2',
  'Заголовок 3',
  'Заголовок 4',
  'Заголовок 5',
  'Заголовок 6',
  'Заголовок 7',
  'Заголовок 8',
  'Заголовок 9',
  'Заголовок 10',
];

const typesHousing = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const checkin = ['12:00', '13:00', '14:00'];

const checkout = ['12:00', '13:00', '14:00'];

const featuresHousing = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const adDescriptions = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
  'Описание 6',
  'Описание 7',
  'Описание 8',
  'Описание 9',
  'Описание 10',
];

const adPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function createNewAdv () {
  const getLat = getRndFloat(35.65000, 35.70000, 5);
  const getLng = getRndFloat(139.70000, 139.80000, 5);

  return {
    author:  {
      avatar: getRndArrayElement(avatarUsers),
    },
    offer: {
      title: getRndArrayElement(adTitles),
      address: `${getLat}, ${getLng}`,
      price: getRndInteger(5000, 1000000),
      type: getRndArrayElement(typesHousing),
      rooms: getRndInteger(1, 5),
      guests: getRndInteger(1, 9),
      checkin: getRndArrayElement(checkin),
      checkout: getRndArrayElement(checkout),
      features: getRndArrayFromArray(featuresHousing),
      description: getRndArrayElement(adDescriptions),
      photos: getRndArrayElement(adPhotos),
    },
    location: {
      lat: getLat,
      lng: getLng,
    },
  };
}

const SIMILAR_ADV_COUNT = 10;

const createAds = new Array(SIMILAR_ADV_COUNT).fill().map(createNewAdv);

export{createAds};
