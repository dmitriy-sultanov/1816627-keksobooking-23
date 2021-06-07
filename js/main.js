function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRndInteger(0, 25));

function getRndFloat(min, max,) {
  return Math.random() * (max - min);
}
console.log(getRndFloat (0, 3));
