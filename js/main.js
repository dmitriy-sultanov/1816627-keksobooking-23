import './map.js';
import {getData} from './api.js';
import {showAlert, debounce} from './util.js';
import {submitOfferForm} from './actions.js';
import {activateFilterForm} from './form-status';
import {showSimilarOffers, onChangeFilterForm} from './filters';

const RERENDER_DELAY = 500;

getData(
  (similarOffers) => {
    showSimilarOffers(similarOffers);
    onChangeFilterForm(debounce(()=>showSimilarOffers(similarOffers),
      RERENDER_DELAY,
    ));
    activateFilterForm();
  },
  (message) => {
    message = 'При загрузке данных произошла ошибка';
    showAlert(message);
  });

submitOfferForm();
