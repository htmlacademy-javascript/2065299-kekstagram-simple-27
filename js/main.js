// функция возвращает случайное целое число в заданном интервале включительно (источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive (5,567);

// Функция для проверки максимальной длины строки

function checkstringLength (stringLength, minStringLength, maxStringLength) {
  return stringLength >= minStringLength && stringLength <= maxStringLength;
}

checkstringLength(36, 20, 140);

// function checkstringLength () {
//   const comment = document.querySelector('text__description');
//   const stringLength = comment.length;
//   const MIN_STRING_LENGTH = 20;
//   const MAX_STRING_LENGTH = 140;
//   return stringLength >= MIN_STRING_LENGTH && stringLength <= MAX_STRING_LENGTH;
// }

// checkstringLength();
