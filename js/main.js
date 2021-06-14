function getRndInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRndFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const getRndArrayElement = (elements) => elements[getRndInteger(0, elements.length - 1)];

const getRndArrayFromArray = (elements) => {
  const resultArray = [...elements];
  const resultLength = getRndInteger(1, elements.length);
  for (let i = 0; i < elements.length - resultLength; i++) {
    resultArray.splice(getRndInteger(0, resultArray.length - 1), 1);
  };
  return resultArray;
};

const avatars = ['img/avatars/user{{01}}.png',
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
const titles = ['Заголовок 1',
'Заголовок 2',
'Заголовок 3',
'Заголовок 4',
'Заголовок 5',
'Заголовок 6',
'Заголовок 7',
'Заголовок 8',
'Заголовок 9',
'Заголовок 10'
];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptions = ['Описание 1',
'Описание 2',
'Описание 3',
'Описание 4',
'Описание 5',
'Описание 6',
'Описание 7',
'Описание 8',
'Описание 9',
'Описание 10'
];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const lat = getRndFloat(35.65000, 35.70000, 5);
const lng = getRndFloat(139.70000, 139.80000, 5);

const SIMILAR_ADV_COUNT = 10;

const createNewAdv = () => {
    return {
    author:  {
      avatar: getRndArrayElement(avatars),
    },
    offer: {
      title: getRndArrayElement(titles),
      address: `${lat}, ${lng}`,
      price: getRndInteger(5000, 50000),
      type: getRndArrayElement(types),
      rooms: getRndInteger(1, 5),
      guests: getRndInteger(1, 9),
      checkin: getRndArrayElement(checkin),
      checkout: getRndArrayElement(checkout),
      features: getRndArrayFromArray(features),
      description: getRndArrayElement(descriptions),
      photos: getRndArrayElement(photos),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
  };
  const randomAdv = new Array(SIMILAR_ADV_COUNT).fill().map(createNewAdv);
