const getServerAddress = 'https://23.javascript.pages.academy/keksobooking/data';
const postServerAddress = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onError) => {
  fetch (getServerAddress)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error;
    })
    .then((offers) => {
      onSuccess(offers);
    })
    .catch ((err) => {
      onError(err);
    });
};

const sendData = (body, onSuccess, onFail) => {
  fetch(postServerAddress, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
