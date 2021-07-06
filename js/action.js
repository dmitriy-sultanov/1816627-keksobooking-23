import { sendData } from './api.js';
import { resetMainMarker } from './map.js';
import { isEscEvent } from './utils.js';

const body = document.querySelector('body');
const offerForm = document.querySelector('.ad-form');
const successTamplate = document.querySelector('#success').content.querySelector('.success');
const errorTamplate = document.querySelector('#error').content.querySelector('.error');
const resetButton = document.querySelector('.ad-form__reset');
const mapForm = document.querySelector('.map__filters');

const resetAll = () => {
  offerForm.reset();
  mapForm.reset();
  resetMainMarker();
};

const messageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
  }
};

function closeMessage () {
  const message = body.querySelector('.success');
  body.lastChild.remove();
  document.removeEventListener('keydown', messageEscKeydown);
  document.removeEventListener('click', closeMessage);
  if (message) {
    resetAll();
  }
}

function showMessage (tamplate) {
  const message = body.appendChild(tamplate);
  document.addEventListener('keydown', messageEscKeydown);
  document.addEventListener('click', closeMessage);
  if (message.className==='error') {
    message.querySelector('.error__button').addEventListener('click', closeMessage);
  }
}

const resetAllButton = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetAll();
  });
};

const submitOfferForm  = () => {
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
