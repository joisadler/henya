export default () => {
  const subheadlines = document.querySelectorAll('.home-subheadline h2, .home-action h2');
  if ((/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // device is a mobile phone
    /* eslint-disable no-return-assign, no-param-reassign */
    subheadlines.forEach(h2 => h2.style.fontSize = '6.4vmin');
  }
};
