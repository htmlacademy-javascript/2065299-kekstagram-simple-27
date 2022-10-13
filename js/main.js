// функция возвращает случайное целое число в заданном интервале включительно (источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(5,567);

// Функция для проверки максимальной длины строки

const checkStringLength = (stringLength, maxStringLength) => stringLength <= maxStringLength;
checkStringLength(36, 140);

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const POSTS_COUNT = 25;
const COMMENTS_COUNT = {
  MIN: 0,
  MAX:200,
};
const LIKES_COUNT = {
  MIN: 15,
  MAX:200,
};
const DESCRIPTION = [
  'Это я в Ленинграде на катере катался, щас я дома уже.',
  'Велопрогулка по парку',
  '5 лет позади, наш выпускной. #MIIT2014',
  'День рождения любимой бабушки',
  'Учусь играть на гитаре, привет соседи',
  '#travelling#sea#family',
  'Первое тату, начало положено #tatoo',
  'Семейные портрет',
  'Научу писать посты, информация в шапке профиля',
  '#пицца#вкусняшки порадуй свои вкусовые сосочки',
  'Первый полет на вертолете',
  'Счастливы вместе',
  'Это я на море отдыхала, щас я дома уже. #Turkey2022',
  'Малышня, любимые детки',
  'Пусть это останется здесь',
  'Это я на ногти ходила, щас я дома уже.',
  'Котиков вам в ленту',
  'Это я в театр ходила, щас я дома уже.',
  'Новый год в кругу семьи',
  '#love#honeymoon',
  'Первые соревнования брата! ЧЕМПИОН!',
  'Это я в клубе была, щас я дома уже',
  'Жили-были',
  'Это я в парке гуляла, щас я дома уже.',
  'Я у мамы молодец!',
];

const photoData = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomIntInclusive(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: getRandomIntInclusive(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX),
}
);

const photoFeed = () => Array.from({length: POSTS_COUNT}, (_, postIndex) => photoData(postIndex + 1));
photoFeed();
