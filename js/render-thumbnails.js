const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const randomThumbnailsFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');

const renderThumbnails = (array) => {
  array.forEach(({url, likes, comments}) => {
    const thumbnailElement = thumbnailTemplate.cloneNode('true');
    thumbnailElement.querySelector('.picture__img').src = url;
    thumbnailElement.querySelector('.picture__likes').textContent = likes;
    thumbnailElement.querySelector('.picture__comments').textContent = comments;
    randomThumbnailsFragment.appendChild(thumbnailElement);
  });
  pictures.appendChild(randomThumbnailsFragment);
};

export {renderThumbnails};
