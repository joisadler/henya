export default () => {
  const menuButton = document.querySelector('.btn-menu');
  const ticker = document.querySelector('.hidden-menu-ticker');

  if ((/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // device is a mobile phone
    if (screen.width >= 768) {
      menuButton.style.top = 'calc(15.5vh / 3)';
    }
  }

  ticker.addEventListener('change', () => {
    if (ticker.checked) {
      menuButton.style.top = 0;
    } else if ((/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // device is a mobile phone
      if (screen.width >= 768) {
        menuButton.style.top = 'calc(15.5vh / 3)';
      }
      menuButton.style.top = '6vmin';
    }
    else { // device is a tablet
      menuButton.style.top = 'calc((15.5vh / 3) + 4.5vh)';
    }
  });
};
