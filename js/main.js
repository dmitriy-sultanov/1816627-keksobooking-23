import {createUsualMarker} from './map.js';
import {getData} from './api.js';
import {showAlert} from './utils.js';
import {submitOfferForm} from './action.js';

const SIMILAR_OFFERS_COUNT = 10;


getData(
  (similarOffers) => {
    similarOffers.slice(0, SIMILAR_OFFERS_COUNT)
      .forEach((offer) => {
        createUsualMarker(offer);
      });
  },
  (message) => {
    message = 'При загрузке данных произошла ошибка';
    showAlert(message);
  });

submitOfferForm();


