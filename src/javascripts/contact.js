export default () => {
  const $form = $('#contact-form');
  const $checkbox = $('#agree');
  const $button = $('.contact-submit-button');

  const submitHandler = (e) => {
    e.preventDefault();

    if ($checkbox.is(':checked')) {
      $.ajax({
        url: '/contact',
        type: 'POST',
        data: $form.serialize()
      });// .done(response => console.log(response));
    }
  };

  const activateButton = () => {
    $button.toggleClass('active');
  };

  $form.on('submit', submitHandler);
  $checkbox.on('change', activateButton);

  const contactOptions = document.querySelectorAll('.contact-option');
  const phoneLink = document.querySelector('#contact-options-phone-link');
  const facebookLink = document.querySelector('#contact-options-facebook-link');
  const instagramLink = document.querySelector('#contact-options-instagram-link');
  const mailLink = document.querySelector('#contact-options-mail-link');

  if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // Mobile devices
    facebookLink.addEventListener('click', () => {
      setTimeout(() => {
        window.location = 'https://www.facebook.com/henyadesign/';
      }, 25);
      if ((/iPhone|iPad|iPod/i.test(navigator.userAgent))) { // IOS devices
        window.location = 'fb://page?id=2036302739931258';
      } else window.location = 'fb://page/2036302739931258';
    });
    instagramLink.addEventListener('click', () => {
      setTimeout(() => {
        window.location = 'https://www.instagram.com/henya_design/';
      }, 25);
      window.location = 'instagram://user?username=henya_design';
    });
  }

  if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // Desktop devices
    facebookLink.setAttribute('href', 'https://www.facebook.com/henyadesign/');
    instagramLink.setAttribute('href', 'https://www.instagram.com/henya_design/');
    phoneLink.style.pointerEvents = 'none';
    mailLink.style.pointerEvents = 'none';

    /* eslint-disable no-param-reassign */
    contactOptions.forEach((option) => {
      option.addEventListener('mouseover', () => {
        if (option.firstElementChild.nextElementSibling.id === 'contact-options-phone-link' ||
        option.firstElementChild.nextElementSibling.id === 'contact-options-mail-link') {
          option.style.cursor = 'default';
        } else option.style.cursor = 'pointer';
        option.style.boxShadow = '0 0 1vw white';
        option.style.border = '1px solid white';
        if (option.firstElementChild.nextElementSibling.id !== 'contact-options-phone-link' &&
        option.firstElementChild.nextElementSibling.id !== 'contact-options-mail-link') {
          option.addEventListener('click', () => {
            option.firstElementChild.nextElementSibling.click();
          });
        }
      });
      option.addEventListener('mouseleave', () => {
        option.style.cursor = 'default';
        option.style.boxShadow = 'none';
        option.style.border = 'none';
      });
    });
  }
  contactOptions.forEach((option) => {
    option.addEventListener('click', () => {
      option.firstElementChild.nextElementSibling.click();
      option.firstElementChild.nextElementSibling.click();
    });
  });
};

