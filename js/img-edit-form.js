import { isEscapeKey } from './util.js';
import { resetScale } from './change-scale.js';
import { resetEffect } from './add-effect.js';

const body = document.querySelector('body');
const imgEditForm = document.querySelector('.img-upload__form');
const uploadFileInput = imgEditForm.querySelector('#upload-file');
const imgEditor = imgEditForm.querySelector('.img-upload__overlay');
const uploadCloseButton = imgEditForm.querySelector('#upload-cancel');
const commentText = imgEditForm.querySelector('.text__description');

const onUploadCloseButtonClick = () => {
  imgEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  resetScale();
  resetEffect();
  document.querySelector('#effect-none').checked = true;
  commentText.value = '';
  uploadFileInput.value = '';
  document.removeEventListener('keydown', onImgEditorEscKeydown);
  uploadCloseButton.removeEventListener('click', onUploadCloseButtonClick);
};

const onUploadFileInputChange = () => {
  imgEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onImgEditorEscKeydown);
  uploadCloseButton.addEventListener('click', onUploadCloseButtonClick);
};

function onImgEditorEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onUploadCloseButtonClick();
  }
}

const loadImg = () => uploadFileInput.addEventListener('change', onUploadFileInputChange);


const validator = new Pristine(imgEditForm, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__description--error',
},
true
);

imgEditForm.addEventListener('submit', (evt) => {
  const isValid = validator.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export{ loadImg };
