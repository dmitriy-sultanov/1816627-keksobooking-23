import {getGuestEnding, getRoomEnding} from './util.js';

const getPopupOffer = (offerElement) =>{
  const similarOfferTemplate = document.querySelector('#card')
    .content
    .querySelector('.popup');
  const offer = offerElement.offer;
  const author = offerElement.author;
  const similarOffer = similarOfferTemplate.cloneNode(true);
  const popupFeatures = similarOffer.querySelector('.popup__features');
  const popupPhotos = similarOffer.querySelector('.popup__photos');
  const popupTitle = similarOffer.querySelector('.popup__title');
  const popupAddress = similarOffer.querySelector('.popup__text--address');
  const popupPrice = similarOffer.querySelector('.popup__text--price');
  const popupType = similarOffer.querySelector('.popup__type');
  const popupCapacity = similarOffer.querySelector('.popup__text--capacity');
  const popupTime = similarOffer.querySelector('.popup__text--time');
  const popupDescription = similarOffer.querySelector('.popup__description');
  const popupAvatar = similarOffer.querySelector('.popup__avatar');

  const checkDataAvailability = (features, photos, type) => {
    if (!offer.title) {popupTitle.remove();}
    else {popupTitle.textContent = offer.title;}
    if (!offer.address) {popupAddress.remove();
    } else {popupAddress.textContent = offer.address;}
    if (!offer.price) {popupPrice.remove();
    } else {popupPrice.textContent = offer.price;}
    if (!offer.rooms|| !offer.guests) {popupCapacity.remove();
    } else {popupCapacity.textContent = `${offer.rooms} ${getRoomEnding(offer.rooms)} для ${offer.guests} ${getGuestEnding(offer.guests)}`;}
    if (!offer.checkin || !offer.checkout) {popupTime.remove();
    } else {popupTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;}
    if (!offer.description) {popupDescription.remove();
    } else {popupDescription.textContent = offer.description;}
    if (!author.avatar) {popupAvatar.remove();}
    else {popupAvatar.src = author.avatar;}
    if (!offer.features) {popupFeatures.remove();
    } else {features(offer.features);}
    if (!offer.photos) {popupPhotos.remove();
    } else {photos(offer.photos);}
    if (!offer.type) {popupType.remove();
    } else {popupType.textContent = type(offer.type);}
  };

  const getFeatures = (offerFeatures) => {
    const features = offerFeatures.map((feature) => `popup__feature--${feature}`);
    features.forEach(() => {
      popupFeatures.querySelectorAll('.popup__feature').
        forEach((item) => {
          const elementClass = item.classList[1];
          if (!features.includes(elementClass)) {
            item.remove();
          }
        });
    });
  };

  const getPhotos = (offerPhotos) => {
    offerPhotos.forEach ((item) => {
      const popupPhoto = popupPhotos.querySelector('.popup__photo').cloneNode(true);
      popupPhoto.src = item;
      popupPhotos.appendChild(popupPhoto);
    });
    popupPhotos.firstElementChild.remove();
  };

  const translateTypes = (type) => {
    switch(type) {
      case 'palace' : return 'Дворец';
      case 'flat' : return 'Квартира';
      case 'house' : return 'Дом';
      case 'bungalow' : return 'Бунгало';
      case 'hotel' : return 'Отель';
    }
  };

  checkDataAvailability(getFeatures, getPhotos, translateTypes);
  return similarOffer;
};

export {getPopupOffer};
