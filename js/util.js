const SHOW_ALERT_TIME = 5000;

const getRoomEnding = (numberOfItem) => {
  const itemWords = ['комнат', 'комнаты', 'комната'];
  const number = numberOfItem%10;

  if ((number>=5) || (number===0) || (numberOfItem>=11&&numberOfItem<=20)) {
    return itemWords[0];
  }
  if (number > 1 && number < 5) {
    return itemWords[1];
  }
  if (number===1) {
    return itemWords[2];
  }
};

const getGuestEnding = (numberOfItem) => {
  const itemWords = ['гостей', 'гостя'];
  const number = numberOfItem%10;

  if (number===1) {
    return itemWords[1];
  }
  else {
    return itemWords[0];
  }
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 200;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '10%';
  alertContainer.style.top = '0%';
  alertContainer.style.right = '10%';
  alertContainer.style.height = '100px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.lineHeight = '100px';
  alertContainer.style.backgroundColor = 'orange';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, SHOW_ALERT_TIME);
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const isImgFileType = (fileName, rightTypes) =>
  rightTypes.some((typeFile) => fileName.endsWith(typeFile));

export {getGuestEnding, getRoomEnding, showAlert, isEscEvent, debounce, isImgFileType};
