export default () => {
  const fbLink = document.querySelector('.home-facebook-link');
  const instaLink = document.querySelector('.home-instagram-link');
  if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // on desktop
    fbLink.setAttribute('href', 'https://www.facebook.com/henyadesign/');
    instaLink.setAttribute('href', 'https://www.instagram.com/henya_design/');
  }
  if ((/iPhone|iPad|iPod/i.test(navigator.userAgent))) { // on IOS
    fbLink.setAttribute('href', 'fb://page?id=2036302739931258');
  }
};
