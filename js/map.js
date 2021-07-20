import {makeInactiveAllForm, makeActiveOfferForm} from './form-status.js';
import {getPopupOffer} from './popup.js';
import {getFormValidity} from './form-validity.js';

const TOKYO_COORDINATES = {
  lat: 35.68959,
  lng: 139.69224};

const MAIN_PIN = {
  iconUrl: 'img/main-pin.svg',
  dimensions: [52, 52],
  anchors: [26, 52],
};

const SIMPLE_PIN = {
  iconUrl: 'img/pin.svg',
  dimensions: [40, 40],
  anchors: [20, 40],
};

const LAYER_OSM = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ZOOM_LEVEL = 10;

const addressInput=document.querySelector('#address');

makeInactiveAllForm();

const map = L.map('map-canvas')
  .on('load', () => {
    makeActiveOfferForm();
    getFormValidity();
  })
  .setView(TOKYO_COORDINATES, ZOOM_LEVEL);

L.tileLayer(
  LAYER_OSM,
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })
  .addTo(map);

const mainPinIcon = L.icon(MAIN_PIN);

const mainPinMarker = L.marker(
  TOKYO_COORDINATES,
  {
    draggable: true,
    icon: mainPinIcon,
  },
).addTo(map);

const defaultAddress = mainPinMarker.getLatLng();
addressInput.value=`${defaultAddress.lat.toFixed(5)}, ${defaultAddress.lng.toFixed(5)}`;
mainPinMarker.on('move', (evt) => {
  const newAddress = evt.target.getLatLng();
  addressInput.value=`${newAddress.lat.toFixed(5)}, ${newAddress.lng.toFixed(5)}`;
});

const resetMainPinMarker = () => mainPinMarker.setLatLng(TOKYO_COORDINATES);

const createSimpleMarker = ((element) => {
  const simplePinIcon = L.icon(SIMPLE_PIN);
  return L.marker(
    element.location,
    {
      icon: simplePinIcon,
    },
  ).addTo(map)
    .bindPopup(getPopupOffer(element),
      {
        keepInView: true,
      });
});

export {createSimpleMarker, resetMainPinMarker};
