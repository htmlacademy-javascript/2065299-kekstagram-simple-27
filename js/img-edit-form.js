import {isEscapeKey} from './util.js';

const uploadFileInput = document.querySelector('#upload-file');
const body = document.querySelector('body');
const imgEditForm = document.querySelector('.img-upload__overlay');
const uploadCloseButton = document.querySelector('#upload-cancel');
const commentText = document.querySelector('.text__description');

function onImgEditFormEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgEditForm.classList.add('hidden');
    body.classList.remove('modal-open');
  }
}

function openImgEditForm() {
  imgEditForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onImgEditFormEscKeydown);
}

function closeImgEditForm() {
  imgEditForm.classList.add('hidden');
  body.classList.remove('modal-open');
  // document.querySelector('.scale__control--value').value = 100; как масштаб задать 100% при закрытии?
  document.querySelector('#effect-none').checked = true;
  commentText.value = '';
  uploadFileInput.value = '';
  document.removeEventListener('keydown', onImgEditFormEscKeydown);
}

uploadFileInput.addEventListener('change', openImgEditForm);
uploadCloseButton.addEventListener('click', closeImgEditForm);
