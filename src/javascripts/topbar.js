export default () => {
  const topbarContacts = document.querySelectorAll('.topbar-contact-text');
  [...topbarContacts].forEach((contact) => {
    // Сheck if the device is a desktop
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
      contact.style.pointerEvents = 'none'; // eslint-disable-line no-param-reassign
    }
  });
};
