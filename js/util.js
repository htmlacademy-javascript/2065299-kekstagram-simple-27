const isEscapeKey = (evt) => evt.key === 'Escape';

const showGetDataErrorModal = () => {
  const errorModal = document.createElement('div');
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Не удалось загрузить данные, нет соединения с сервером';
  errorModal.appendChild(errorMessage);
  errorModal.style.zIndex = '100';
  errorModal.style.position = 'absolute';
  errorModal.style.left = '0';
  errorModal.style.right = '0';
  errorModal.style.top = '0';
  errorModal.style.padding = '5px';
  errorModal.style.backgroundColor = '#ffffff';
  errorModal.style.border = '1px solid #e00000';
  errorMessage.style.color = '#444444';
  errorMessage.style.fontSize = '20px';
  errorMessage.style.textAlign = 'center';

  document.body.append(errorModal);
  setTimeout (() => {
    errorModal.remove();
  }, 5000);
};

export { isEscapeKey, showGetDataErrorModal };
