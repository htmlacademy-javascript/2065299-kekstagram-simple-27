import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const uploadSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const uploadErrorTemplate = document.querySelector('#error').content.querySelector('.error');

const onCloseSuccessButtonClick = () => {
  hideSuccessMessage();
};

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideSuccessMessage();
  }
};

const onCloseErrorButtonClick = () => {
  hideErrorMessage();
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideErrorMessage();
  }
};

let closeSuccessButton;

const showSuccessMessage = () => {
  const uploadSuccessElement = uploadSuccessTemplate.cloneNode(true);
  closeSuccessButton = uploadSuccessElement.querySelector('.success__button');
  body.appendChild(uploadSuccessElement);
  body.style.overflow = 'hidden';
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  closeSuccessButton.addEventListener('click', onCloseSuccessButtonClick);
};

let closeErrorButton;

const showErrorMessage = () => {
  const uploadErrorElement = uploadErrorTemplate.cloneNode(true);
  closeErrorButton = uploadErrorElement.querySelector('.error__button');
  body.appendChild(uploadErrorElement);
  body.style.overflow = 'hidden';
  document.addEventListener('keydown', onErrorMessageEscKeydown);
  closeErrorButton.addEventListener('click', onCloseErrorButtonClick);
};

function hideSuccessMessage() {
  const successMessage = document.querySelector('.success');
  closeSuccessButton.removeEventListener('click', onCloseSuccessButtonClick);
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  successMessage.remove();
  body.style.overflow = 'auto';
}

function hideErrorMessage() {
  const errorMessage = document.querySelector('.error');
  closeErrorButton.removeEventListener('click', onCloseErrorButtonClick);
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  errorMessage.remove();
  body.style.overflow = 'auto';
}

export { showSuccessMessage, showErrorMessage };
