//Случайное целое число
function getRndInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//Случайное число с плавающей запятой
function getRndFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

//Слуйчайный элемент масива
const getRndArrayElement = (elements) => elements[getRndInteger(0, elements.length - 1)];

//Массив случайной длины из значений
const getRndArrayFromArray = (elements) => {
  const resultArray = [...elements];
  const resultLength = getRndInteger(1, elements.length);
  for (let i = 0; i < elements.length - resultLength; i++) {
    resultArray.splice(getRndInteger(0, resultArray.length - 1), 1);
  }
  return resultArray;
};

export {getRndInteger, getRndFloat, getRndArrayElement, getRndArrayFromArray};
