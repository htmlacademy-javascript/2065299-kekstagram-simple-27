import { isEscapeKey } from './util.js';
import { onImgEditorEscKeydown } from './img-edit-form.js';

const body = document.querySelector('body');
const uploadSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const uploadErrorTemplate = document.querySelector('#error').content.querySelector('.error');

let closeSuccessButton;

const showSuccessMessage = () => {
  const uploadSuccessElement = uploadSuccessTemplate.cloneNode(true);
  const successModal = uploadSuccessElement.querySelector('.success__inner');
  closeSuccessButton = uploadSuccessElement.querySelector('.success__button');
  body.appendChild(uploadSuccessElement);
  document.removeEventListener('keydown', onImgEditorEscKeydown);

  const onSuccessOverlayClick = (evt) => {
    const successOverlay = evt.composedPath().includes(successModal);
    if (!successOverlay) {
      hideSuccessMessage();
      deleteListener();
    }
  };
  document.addEventListener('click', onSuccessOverlayClick);

  const onCloseSuccessButtonClick = () => {
    hideSuccessMessage();
    deleteListener();
  };
  closeSuccessButton.addEventListener('click', onCloseSuccessButtonClick);

  const onSuccessMessageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideSuccessMessage();
      deleteListener();
    }
  };
  document.addEventListener('keydown', onSuccessMessageEscKeydown);

  function deleteListener() {
    document.removeEventListener('click', onSuccessOverlayClick);
    closeSuccessButton.removeEventListener('click', onCloseSuccessButtonClick);
    document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  }
};

let closeErrorButton;

const showErrorMessage = () => {
  const uploadErrorElement = uploadErrorTemplate.cloneNode(true);
  const errorModal = uploadErrorElement.querySelector('.error__inner');
  closeErrorButton = uploadErrorElement.querySelector('.error__button');
  body.appendChild(uploadErrorElement);
  document.removeEventListener('keydown', onImgEditorEscKeydown);

  const onErrorOverlayClick = (evt) => {
    const errorOverlay = evt.composedPath().includes(errorModal);
    if ( ! errorOverlay ) {
      hideErrorMessage();
      deleteListener();
    }
  };
  document.addEventListener('click', onErrorOverlayClick);

  const onCloseErrorButtonClick = () => {
    hideErrorMessage();
    deleteListener();
  };
  closeErrorButton.addEventListener('click', onCloseErrorButtonClick);

  const onErrorMessageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideErrorMessage();
      deleteListener();
    }
  };
  document.addEventListener('keydown', onErrorMessageEscKeydown);

  function deleteListener() {
    document.removeEventListener('click', onErrorOverlayClick);
    closeErrorButton.removeEventListener('click', onCloseErrorButtonClick);
    document.removeEventListener('keydown', onErrorMessageEscKeydown);
  }
};

function hideSuccessMessage() {
  const successMessage = document.querySelector('.success');
  successMessage.remove();
  document.addEventListener('keydown', onImgEditorEscKeydown);
}

function hideErrorMessage() {
  const errorMessage = document.querySelector('.error');
  errorMessage.remove();
  document.addEventListener('keydown', onImgEditorEscKeydown);
}

export { showSuccessMessage, showErrorMessage };
