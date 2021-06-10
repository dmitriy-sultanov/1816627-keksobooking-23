function getRndInteger(min, max) {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  } else {
    return ('Задан неверный диапазон!');
  }
}
getRndInteger(0, 25);

function getRndFloat(min, max, maxDigits = 0) {
  if (min >= 0 && min < max) {
    const numFloat = 10 ** maxDigits;
    return ~~((Math.random() * (max - min) + min) * numFloat) / numFloat;
  } else {
    return ('Задан неверный диапазон!');
  }
}
getRndFloat(0, 5, 1);
