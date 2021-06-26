const setFormValidity = () => {
  const minTitleLength = 30;
  const maxTitleLength = 100;
  const maxPrice = 1000000;
  const titleInput = document.querySelector('#title');
  const priceInput = document.querySelector('#price');
  const roomsInput = document.querySelector('#room_number');
  const guestsInput = document.querySelector('#capacity');

  const isGuestValidity = () => {
    const rooms = roomsInput.value;
    const guests = guestsInput.value;
    if ( guests>rooms&&guests!=='0'&&rooms!=='100') {guestsInput.setCustomValidity(`Не более ${rooms} гостя`);
    } else if (rooms === '100' && guests !=='0') {guestsInput.setCustomValidity('Не для гостей');
    } else if (rooms !=='100' && guests === '0') {guestsInput.setCustomValidity('Нужно 100 комнат');
    } else { guestsInput.setCustomValidity('');
    }
    guestsInput.reportValidity();
  };

  titleInput.setAttribute('minlength',`${minTitleLength}`);
  titleInput.setAttribute('maxlength',`${maxTitleLength}`);
  priceInput.setAttribute('max', `${maxPrice}`);

  titleInput.addEventListener('input', () => {
    const valueLength = titleInput.value.length;
    if (valueLength < minTitleLength) {
      titleInput.setCustomValidity(`Введите ещё ${minTitleLength - valueLength } симв.`);
    } else if (valueLength > maxTitleLength) {
      titleInput.setCustomValidity(`Удалите ${valueLength - maxTitleLength} симв.`);
    } else {
      titleInput.setCustomValidity('');
    }
    titleInput.reportValidity();
  });


  guestsInput.value = '1';
  guestsInput.addEventListener('change', isGuestValidity);
  roomsInput.addEventListener('change', isGuestValidity);


};

export {setFormValidity};
