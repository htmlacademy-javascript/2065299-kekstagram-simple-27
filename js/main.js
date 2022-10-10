// функция возвращает случайное целое число в заданном интервале включительно (источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (min < 0 || max < 0 || max <= min) ? NaN : Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(5,567);

// Функция для проверки максимальной длины строки

const checkStringLength = (stringLength, maxStringLength) => stringLength <= maxStringLength;
checkStringLength(36, 140);
