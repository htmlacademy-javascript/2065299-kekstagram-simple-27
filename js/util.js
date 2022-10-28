// функция возвращает случайное целое число в заданном интервале включительно (источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция возращает случайный элемент в указанном массиве

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

// Функция для проверки максимальной длины строки

const checkStringLength = (stringLength, maxStringLength) => stringLength <= maxStringLength;
checkStringLength(36, 140);

// Функция проверки нажатой клавиши Esc

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomIntInclusive, getRandomArrayElement, isEscapeKey};
