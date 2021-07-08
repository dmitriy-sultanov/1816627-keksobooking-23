import { getData, sendData } from './api.js';
import { getDefaultValues } from './form-validity.js';
import { showSimilarOffers } from './filters.js';
import { resetMainPinMarker } from './map.js';
import { isEscEvent } from './util.js';


const body = document.querySelector('body');
const offerForm = document.querySelector('.ad-form');
const successTamplate = document.querySelector('#success').content.querySelector('.success');
const errorTamplate = document.querySelector('#error').content.querySelector('.error');
const resetButton = document.querySelector('.ad-form__reset');
const mapForm = document.querySelector('.map__filters');

const resetAllForm = () => {
  offerForm.reset();
  getDefaultValues();
  mapForm.reset();
  resetMainPinMarker();
  getData((similarOffers) => showSimilarOffers(similarOffers));
};

const onShowMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
  }
};

function closeMessage () {
  const message = body.querySelector('.success');
  body.lastChild.remove();
  document.removeEventListener('keydown', onShowMessageEscKeydown);
  document.removeEventListener('click', closeMessage);
  if (message) {
    resetAllForm();
  }
}

function showMessage (tamplate) {
  const message = body.appendChild(tamplate);
  document.addEventListener('keydown', onShowMessageEscKeydown);
  document.addEventListener('click', closeMessage);
  if (message.className==='error') {
    message.querySelector('.error__button').addEventListener('click', closeMessage);
  }
}

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
      () => showMessage(successTamplate),
      () => showMessage(errorTamplate),
    );
  });
};

export {submitOfferForm, resetAllButton};
