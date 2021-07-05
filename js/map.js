import {diactivateForm, activateForm} from './form-status.js';
import {getPopupOffer} from './popup.js';
import {setFormValidity} from './form-validity.js';

const cityTokyo = {
  lat: 35.68959,
  lng: 139.69224};

const addressInput=document.querySelector('#address');

diactivateForm();

const map = L.map('map-canvas').on('load', () => {
  activateForm();
  setFormValidity();
}).setView(cityTokyo,10);


L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPin = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  cityTokyo,
  {
    draggable: true,
    icon: mainPin,
  },
).addTo(map);

const defaultAddress = mainMarker.getLatLng();
addressInput.value=`${defaultAddress.lat.toFixed(5)}, ${defaultAddress.lng.toFixed(5)}`;
mainMarker.on('move', (evt) => {
  const newAddress = evt.target.getLatLng();
  addressInput.value=`${newAddress.lat.toFixed(5)}, ${newAddress.lng.toFixed(5)}`;
});

const resetMainMarker = () => {
  mainMarker.setLatLng(cityTokyo);
};

const createUsualMarker = ((element) => {
  const usualPinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const usualMarker = L.marker(
    element.location,
    {
      icon: usualPinIcon,
    },
  ).addTo(map)
    .bindPopup(getPopupOffer(element),
      {keepInView: true,
      });
  return usualMarker;
});

export {createUsualMarker, resetMainMarker};
