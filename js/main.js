function getRndInteger(min, max) {
  if (max > min) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
  } else {
  return getRndInteger = 0
  }
}
getRndInteger(0, 25);

function getRndFloat(min, max) {
  if (max > min) {
   return Math.random() * (max - min);
  } else {
  return Math.random() * (min - max);
  }
}
getRndFloat (0, 1).toFixed(1);
