import {isEscapeKey} from './util.js';

const uploadFileInput = document.querySelector('#upload-file');
const body = document.querySelector('body');
const imgEditor = document.querySelector('.img-upload__overlay');
const uploadCloseButton = document.querySelector('#upload-cancel');
const commentText = document.querySelector('.text__description');
const imgEditForm = document.querySelector('.img-upload__form');

function onImgEditorEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgEditor.classList.add('hidden');
    body.classList.remove('modal-open');
  }
}

function openImgEditor() {
  imgEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onImgEditorEscKeydown);
}

function closeImgEditor() {
  imgEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  // document.querySelector('.scale__control--value').value = 100; как масштаб задать 100% при закрытии?
  document.querySelector('#effect-none').checked = true;
  commentText.value = '';
  uploadFileInput.value = '';
  document.removeEventListener('keydown', onImgEditorEscKeydown);
}

uploadFileInput.addEventListener('change', openImgEditor);
uploadCloseButton.addEventListener('click', closeImgEditor);

// const validateComment = new Pristine(imgEditForm, {
//   classTo: 'text__label',
//   errorTextParent: 'text__label',
//   errorTextClass: 'text__error-text',
// });

// imgEditForm.addEventListener('submit', (evt) => {
//   const isValid = validateComment.validate();
//   if (!isValid) {
//     evt.preventDefault();
//   }
// });

// validateComment();
