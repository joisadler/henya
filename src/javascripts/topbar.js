export default () => {
  const topbar = document.getElementById('home-topbar');
  const navbar = document.getElementById('home-navbar');
  if ((/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // device is a mobile phone
    topbar.style.display = 'none';
    navbar.style.height = '20%';
  }

  const topbarContacts = document.querySelectorAll('.topbar-contact-text');
  [...topbarContacts].forEach((contact) => {
    // Сheck if the device is a desktop
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // device is a desktop
      contact.style.pointerEvents = 'none'; // eslint-disable-line no-param-reassign
    }
  });
};
