import './map.js';
import {getData} from './api.js';
import {showAlert, getDebounce} from './util.js';
import {submitOfferForm} from './actions.js';
import {makeActiveFilterForm} from './form-status.js';
import {showSimilarOffers, changeFilterForm} from './filters.js';
import './preview-image.js';

const RERENDER_DELAY = 500;

getData(
  (similarOffers) => {
    showSimilarOffers(similarOffers);
    changeFilterForm(getDebounce(()=>showSimilarOffers(similarOffers),
      RERENDER_DELAY,
    ));
    makeActiveFilterForm();
  },
  (message) => {
    message = 'При загрузке данных произошла ошибка';
    showAlert(message);
  });

submitOfferForm();
