import { createPhotoFeed } from './data.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const randomThumbnails = createPhotoFeed();
const randomThumbnailsFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');

const renderThumbnails = () => {
  randomThumbnails.forEach(({url, likes, comments}) => {
    const thumbnailElement = thumbnailTemplate.cloneNode('true');
    thumbnailElement.querySelector('.picture__img').src = url;
    thumbnailElement.querySelector('.picture__likes').textContent = likes;
    thumbnailElement.querySelector('.picture__comments').textContent = comments;
    randomThumbnailsFragment.appendChild(thumbnailElement);
  });
  pictures.appendChild(randomThumbnailsFragment);
};

export {renderThumbnails};

// randomThumbnails.forEach(({url, likes, comments}) => {
//   const thumbnailElement = thumbnailTemplate.cloneNode('true');
//   thumbnailElement.querySelector('.picture__img').src = url;
//   thumbnailElement.querySelector('.picture__likes').textContent = likes;
//   thumbnailElement.querySelector('.picture__comments').textContent = comments;
//   randomThumbnailsFragment.appendChild(thumbnailElement);
// });

// pictures.appendChild(randomThumbnailsFragment);
