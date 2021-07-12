import './map.js';
import {getData} from './api.js';
import {showAlert, debounce} from './util.js';
import {submitOfferForm} from './actions.js';
import {activateFilterForm} from './form-status.js';
import {showSimilarOffers, onChangeFilterForm} from './filters.js';
import './preview-avatar.js';
import './preview-photo.js';

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
