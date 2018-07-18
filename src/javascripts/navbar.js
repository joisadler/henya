export default () => {
  const menuButton = document.querySelector('.btn-menu');
  if ((/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // device is a mobile phone
    menuButton.style.top = 'calc(15.5vh / 3)';
  }
};
