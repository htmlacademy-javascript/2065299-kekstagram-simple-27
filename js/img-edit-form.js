import { isEscapeKey } from './util.js';
import { resetScale } from './change-scale.js';
import { resetEffect } from './add-effect.js';
import { sendData } from './api.js';

const body = document.querySelector('body');
const imgEditForm = document.querySelector('.img-upload__form');
const uploadFileInput = imgEditForm.querySelector('#upload-file');
const imgEditor = imgEditForm.querySelector('.img-upload__overlay');
const uploadCloseButton = imgEditForm.querySelector('#upload-cancel');
const commentText = imgEditForm.querySelector('.text__description');
const submitButton = imgEditForm.querySelector('.img-upload__submit');

const closeImgEditForm = () => {
  imgEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  resetScale();
  resetEffect();
  document.querySelector('#effect-none').checked = true;
  commentText.value = '';
  uploadFileInput.value = '';
  document.removeEventListener('keydown', onImgEditorEscKeydown);
  uploadCloseButton.removeEventListener('click', closeImgEditForm);
};

const onUploadFileInputChange = () => {
  imgEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onImgEditorEscKeydown);
  uploadCloseButton.addEventListener('click', closeImgEditForm);
};

function onImgEditorEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImgEditForm();
  }
}

uploadFileInput.addEventListener('change', onUploadFileInputChange);

const validator = new Pristine(imgEditForm, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__description--error',
},
true
);

const disableSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую фотографию...';
};

const enableSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setImgEditFormSubmit = (onSuccess, onError) => {
  imgEditForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = validator.validate();
    if (isValid) {
      disableSubmitButton();
      const formData = new FormData(evt.target);
      sendData(onSuccess, onError, formData);
    }
  });
};

export{ setImgEditFormSubmit, closeImgEditForm, enableSubmitButton, onImgEditorEscKeydown };
