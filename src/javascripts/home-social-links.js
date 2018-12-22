export default () => {
  const topbarLinks = document.querySelectorAll('.topbar-link');
  const socialLinks = document.querySelectorAll('.home-social-link');
  const facebookLink = document.querySelector('.home-facebook-link');
  const instagramLink = document.querySelector('.home-instagram-link');
  const whatsAppLink = document.querySelector('.home-whatsapp-link');
  const mailLink = document.querySelector('.home-mail-link');
  const linkedinLink = document.querySelector('.home-linkedin-link');
  const topbarMailIcon = document.getElementById('topbar-mail-icon');
  const topbarFacebookIcon = document.getElementById('topbar-facebook-icon');
  const topbarInstagramIcon = document.getElementById('topbar-instagram-icon');
  const topbarLinkedinIcon = document.getElementById('topbar-linkedin-icon');

  if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // Mobile devices
    facebookLink.addEventListener('click', () => {
      setTimeout(() => {
        window.location = 'https://www.facebook.com/henyadesign/';
      }, 25);
      window.location = 'fb://page/2036302739931258';
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
    mailLink.setAttribute('href', '#contact');

    /* eslint-disable no-return-assign, no-param-reassign */
    topbarLinks.forEach((link) => {
      link.addEventListener('mouseover', () => {
        link.style.color = '#CB74C0';
      });
    });
    topbarLinks.forEach((link) => {
      link.addEventListener('mouseleave', () => {
        link.style.color = '#FFF';
      });
    });

    mailLink.addEventListener('mouseover', () => {
      topbarMailIcon.style.color = '#CB74C0';
    });
    mailLink.addEventListener('mouseleave', () => {
      topbarMailIcon.style.color = '#FFF';
    });

    facebookLink.addEventListener('mouseover', () => {
      topbarFacebookIcon.style.color = '#CB74C0';
    });
    facebookLink.addEventListener('mouseleave', () => {
      topbarFacebookIcon.style.color = '#FFF';
    });

    instagramLink.addEventListener('mouseover', () => {
      topbarInstagramIcon.style.color = '#CB74C0';
    });
    instagramLink.addEventListener('mouseleave', () => {
      topbarInstagramIcon.style.color = '#FFF';
    });

    linkedinLink.addEventListener('mouseover', () => {
      topbarLinkedinIcon.style.color = '#CB74C0';
    });
    linkedinLink.addEventListener('mouseleave', () => {
      topbarLinkedinIcon.style.color = '#FFF';
    });
  }

  socialLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.style.boxShadow = '0 0 1vw white';
    });
    link.addEventListener('mouseleave', () => {
      link.style.boxShadow = 'none';
    });
  });

  if ((/iPhone|iPad|iPod/i.test(navigator.userAgent))) { // IOS devices
    facebookLink.setAttribute('href', 'fb://page?id=2036302739931258');
  }

  if ((/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // mobile phones only
    whatsAppLink.style.display = 'block';
  }
};
