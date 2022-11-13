import { enableSubmitButton } from './img-edit-form.js';

const apiUrls = {
  POST: 'https://27.javascript.pages.academy/kekstagram-simple',
  GET: 'https://27.javascript.pages.academy/kekstagram-simple/data',
};

const getData = (onSuccess, onError) => {
  fetch(apiUrls.GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onError();
      }
    })
    .then(onSuccess)
    .catch(onError);
};

const sendData = (onSuccess, onError, dataForPost) => {
  fetch(apiUrls.POST,
    {
      method: 'Post',
      body: dataForPost,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }})
    .catch(onError)
    .finally(enableSubmitButton);
};

export { getData, sendData };
