import {deactivateAllForm, activateOfferForm} from './form-status.js';
import {getPopupOffer} from './popup.js';
import {getFormValidity} from './form-validity.js';

const TOKYO_COORDINATES = {
  lat: 35.68959,
  lng: 139.69224};

const addressInput=document.querySelector('#address');

deactivateAllForm();

const map = L.map('map-canvas')
  .on('load', () => {
    activateOfferForm();
    getFormValidity();
  })
  .setView(TOKYO_COORDINATES,10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })
  .addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

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

const resetMainPinMarker = () => {
  mainPinMarker.setLatLng(TOKYO_COORDINATES);
};

const createSimpleMarker = ((element) => {
  const simplePinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const simplePinMarker = L.marker(
    element.location,
    {
      icon: simplePinIcon,
    },
  ).addTo(map)
    .bindPopup(getPopupOffer(element),
      {keepInView: true,
      });
  return simplePinMarker;
});

export {createSimpleMarker, resetMainPinMarker};
