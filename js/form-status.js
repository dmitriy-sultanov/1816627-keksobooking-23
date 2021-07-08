import {resetAllButton} from './actions.js';

const form = document.querySelector('.ad-form');
const fieldsetForms = form.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapSelects = mapFilter.querySelectorAll('select');
const mapFieldset = mapFilter.querySelector('fieldset');

const diactivateAllForm = () => {
  form.classList.add('ad-form--disabled');
  fieldsetForms.forEach((item) => {
    item.disabled = true;
  });
  mapFilter.classList.add('ad-form--disabled');
  mapSelects.forEach((select) => {
    select.disabled = true;
  });
  mapFieldset.disabled = true;
};

const activateOfferForm = () => {
  form.classList.remove('ad-form--disabled');
  fieldsetForms.forEach((item) => {
    item.disabled = false;
  });
  resetAllButton();
};

const activateFilterForm = () => {
  mapFilter.classList.remove('ad-form--disabled');
  mapSelects.forEach((select) => {
    select.disabled = false;
  });
  mapFieldset.disabled = false;
};

export {diactivateAllForm, activateOfferForm, activateFilterForm};
