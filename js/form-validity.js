const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const typeInput = document.querySelector('#type');
const roomsInput = document.querySelector('#room_number');
const guestsInput = document.querySelector('#capacity');
const timeInInput = document.querySelector('#timein');
const timeOutInput = document.querySelector('#timeout');
const timeInOptions = timeInInput.querySelectorAll('option');
const timeOutOptions = timeOutInput.querySelectorAll('option');

const getTypePrice = (type) => {
  switch(type) {
    case 'palace' : return '10000';
    case 'flat' : return '1000';
    case 'house' : return '5000';
    case 'bungalow' : return '0';
    case 'hotel' : return '3000';
  }
};

const guestsValidity = () => {
  const rooms = roomsInput.value;
  const guests = guestsInput.value;

  if ( guests>rooms&&guests!=='0'&&rooms!=='100') {
    guestsInput.style.borderColor = 'red';
    guestsInput.setCustomValidity(`Не более ${rooms} гостя`);
  }
  else if (rooms === '100' && guests !=='0') {
    guestsInput.style.borderColor = 'red';
    guestsInput.setCustomValidity('Это не для гостей');
  }
  else if (rooms !=='100' && guests === '0') {
    guestsInput.style.borderColor = 'red';
    guestsInput.setCustomValidity('Нужно 100 комнат');
  } else {
    guestsInput.style.borderColor = 'white';
    guestsInput.setCustomValidity('');
  }
  guestsInput.reportValidity();
};

const priceValidity = () => {
  const minPriceValue = +getTypePrice(typeInput.value);
  const priceValue = +priceInput.value;
  if (priceValue < minPriceValue) {
    priceInput.style.borderColor = 'red';
    priceInput.setCustomValidity(`Минимальная цена ${minPriceValue} руб.`);
  }
  else if (priceValue > MAX_PRICE) {
    priceInput.style.borderColor = 'red';
    priceInput.setCustomValidity(`Максимальная цена ${MAX_PRICE} руб.`);
  } else {
    priceInput.style.borderColor = 'white';
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
};

const titleValidity = () => {
  const valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.style.borderColor = 'red';
    titleInput.setCustomValidity(`Введите ещё ${MIN_TITLE_LENGTH - valueLength } симв.`);
  }
  else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.style.borderColor = 'red';
    titleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleInput.style.borderColor = 'white';
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
};

const getDefaultValues = () => {
  priceInput.placeholder = getTypePrice(typeInput.value);
  guestsInput.value = '1';
};

const getFormValidity = () => {
  getDefaultValues();

  titleInput.addEventListener('input', titleValidity);

  priceInput.addEventListener('input', priceValidity);
  typeInput.addEventListener('change', () => {
    priceValidity();
    priceInput.placeholder = getTypePrice(typeInput.value);
  });

  guestsInput.addEventListener('change',guestsValidity);
  roomsInput.addEventListener('change',guestsValidity);

  timeInInput.addEventListener('change', () => {
    timeOutOptions.forEach((option) => {
      (option.value===timeInInput.value)? option.selected = true : option.selected = false;
    });
  });

  timeOutInput.addEventListener('change', () => {
    timeInOptions.forEach((option) => {
      (option.value===timeOutInput.value)? option.selected = true : option.selected = false;
    });
  });
};

export {getFormValidity, getDefaultValues};
