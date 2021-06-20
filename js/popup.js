import {createAds} from './data.js';

const similarCardTamplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
const similarCardFragment = document.createDocumentFragment();

createAds.forEach(({author, offer}) => {
  const similarCard = similarCardTamplate.cloneNode(true);
  const popupFeautures = similarCard.querySelector('.popup__features');
  const features = offer.features.map((feature) => `popup__feature--${feature}`);
  const popupPhotos = similarCard.querySelector('.popup__photos');
  const popupTitle = similarCard.querySelector('.popup__title');
  const popupAddress = similarCard.querySelector('.popup__text--address');
  const popupPrice = similarCard.querySelector('.popup__text--price');
  const popupType = similarCard.querySelector('.popup__type');
  const popupCapacity = similarCard.querySelector('.popup__text--capacity');
  const popupTime = similarCard.querySelector('.popup__text--time');
  const popupDescription = similarCard.querySelector('.popup__description');
  const popupAvatar = similarCard.querySelector('.popup__avatar');

  const checkingDataAvailability = () => {
    if (offer.title.length===0) {popupTitle.classList.add('hidden');}
    if (offer.address.length===0) {popupAddress.classList.add('hidden');}
    if (offer.price.length===0) {popupPrice.classList.add('hidden');}
    if (offer.rooms.length===0 || offer.guests.length===0) {popupCapacity.classList.add('hidden');}
    if (offer.checkin.length===0 || offer.checkout.length===0) {popupTime.classList.add('hidden');}
    if (offer.description.length===0) {popupDescription.classList.add('hidden');}
    if (author.avatar.length===0) {popupAvatar.classList.add('hidden');}
    if (features.length===0) {popupFeautures.classList.add('hidden');}
    if (offer.photos.length===0) {popupPhotos.classList.add('hidden');}
  };

  const getTypeTranslate = (type) => {
    switch(type) {
      case 'palace' : return 'Дворец';
      case 'flat' : return 'Квартира';
      case 'house' : return 'Дом';
      case 'bungalow' : return 'Бунгало';
      case 'hotel' : return 'Отель';
    }
  };

  popupTitle.textContent = offer.title;
  popupAddress.textContent = offer.address;
  popupPrice.textContent = offer.price;
  popupType.textContent = getTypeTranslate(offer.type);
  popupCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupDescription.textContent = offer.description;
  popupAvatar.src = author.avatar;

  features.forEach(() => {
    popupFeautures.querySelectorAll('.popup__feature').
      forEach((item) => {
        const elementClass = item.classList[1];
        if (!features.includes(elementClass)) {
          item.remove();
        }
      });
  });

  offer.photos.forEach ((item) => {
    const popupPhoto = popupPhotos.querySelector('.popup__photo').cloneNode(true);
    popupPhoto.src = item;
    popupPhotos.appendChild(popupPhoto);
  });
  popupPhotos.firstElementChild.remove();

  checkingDataAvailability();
  similarCardFragment.appendChild(similarCard);
} );

mapCanvas.appendChild(similarCardFragment.firstChild);
