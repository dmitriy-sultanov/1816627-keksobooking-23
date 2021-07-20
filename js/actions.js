import {getData, sendData} from './api.js';
import {getDefaultValues} from './form-validity.js';
import {showSimilarOffers} from './filters.js';
import {resetMainPinMarker} from './map.js';
import {isEscEvent} from './util.js';
import {resetPhotoPreview} from './preview-image.js';


const body = document.querySelector('body');
const offerForm = document.querySelector('.ad-form');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const resetButton = document.querySelector('.ad-form__reset');
const mapForm = document.querySelector('.map__filters');

const resetAllForm = () => {
  offerForm.reset();
  resetPhotoPreview();
  getDefaultValues();
  mapForm.reset();
  resetMainPinMarker();
  getData((similarOffers) => showSimilarOffers(similarOffers));
};


const showMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const closeMessage = () => {
  const message = body.querySelector('.success');
  body.lastChild.remove();
  document.removeEventListener('keydown', showMessageEscKeydown);
  document.removeEventListener('click', closeMessage);

  if (message) {
    resetAllForm();
  }
};

const showMessage = (template) => {
  const message = body.appendChild(template);
  document.addEventListener('keydown', showMessageEscKeydown);
  document.addEventListener('click', closeMessage);

  if (message.className==='error') {
    message.querySelector('.error__button').addEventListener('click', closeMessage);
  }
};

const resetAllButton = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetAllForm();
  });
};

const submitOfferForm = () => {
  offerForm.addEventListener ('submit', (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    sendData (
      data,
      () => showMessage(successTemplate),
      () => showMessage(errorTemplate),
    );
  });
};

export {submitOfferForm, resetAllButton};
