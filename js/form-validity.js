const setFormValidity = () => {
  const minTitleLength = 30;
  const maxTitleLength = 100;
  const maxPrice = 1000000;
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
    } else if (rooms === '100' && guests !=='0') {
      guestsInput.style.borderColor = 'red';
      guestsInput.setCustomValidity('Это не для гостей');
    } else if (rooms !=='100' && guests === '0') {
      guestsInput.style.borderColor = 'red';
      guestsInput.setCustomValidity('Нужно 100 комнат');
    } else {
      guestsInput.style.borderColor = 'white';
      guestsInput.setCustomValidity('');
    }
    guestsInput.reportValidity();
  };

  titleInput.setAttribute('minlength',`${minTitleLength}`);
  titleInput.setAttribute('maxlength',`${maxTitleLength}`);
  priceInput.setAttribute('max', `${maxTitleLength}`);
  priceInput.setAttribute('min', `${getTypePrice(typeInput.value)}`);
  priceInput.placeholder = getTypePrice(typeInput.value);

  typeInput.addEventListener('change', () => {
    priceInput.setAttribute('min', `${getTypePrice(typeInput.value)}`);
    priceInput.placeholder = getTypePrice(typeInput.value);
  });

  titleInput.addEventListener('input', () => {
    const valueLength = titleInput.value.length;
    if (valueLength < minTitleLength) {
      titleInput.style.borderColor = 'red';
      titleInput.setCustomValidity(`Введите ещё ${minTitleLength - valueLength } симв.`);
    } else if (valueLength > maxTitleLength) {
      titleInput.style.borderColor = 'red';
      titleInput.setCustomValidity(`Удалите лишние ${valueLength - maxTitleLength} симв.`);
    } else {
      titleInput.style.borderColor = 'white';
      titleInput.setCustomValidity('');
    }
    titleInput.reportValidity();
  });

  priceInput.addEventListener('input', () => {
    const minPrice = getTypePrice(typeInput.value);
    const priceValue = priceInput.value;
    if (priceValue < minPrice) {
      priceInput.style.borderColor = 'red';
      priceInput.setCustomValidity(`Минимальная цена ${minPrice} руб.`);
    } else if (priceValue > maxPrice) {
      priceInput.style.borderColor = 'red';
      priceInput.setCustomValidity(`Максимальная цена ${maxPrice} руб.`);
    } else {
      priceInput.style.borderColor = 'white';
      priceInput.setCustomValidity('');
    }
    priceInput.reportValidity();
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

export {setFormValidity};
