
export default () => {
  console.log('hello!') // eslint-disable-line
  const carousel = document.getElementById('carousel');
  // const carouselWrapper = document.querySelector('.carousel-wrapper');
  const gallery = document.getElementById('gallery');
  const galleryItems = gallery.querySelectorAll('.gallery-item');
  const images = [...gallery.querySelectorAll('img')];
  // const image = images[0];
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  let currentImageNumber = Math.floor((1 + galleryItems.length) / 2);
  let vw = document.documentElement.clientWidth / 100;
  let galleryWidth = 90 * vw;
  let position = galleryWidth * (currentImageNumber - 1);
  gallery.style.marginLeft = `-${position}px`;

  window.addEventListener('resize', () => {
    vw = document.documentElement.clientWidth / 100;
    galleryWidth = 90 * vw;
    position = galleryWidth * (currentImageNumber - 1);
    gallery.style.marginLeft = `-${position}px`;
  }, true);

  [...galleryItems].forEach((item) => {
    item.style.width = `90vw`; // eslint-disable-line
  });

  const moveRight = () => {
    if (currentImageNumber === galleryItems.length) {
      currentImageNumber = 0;
    }
    if (currentImageNumber < galleryItems.length) {
      currentImageNumber += 1;
    }
    position = galleryWidth * (currentImageNumber - 1);
    gallery.style.marginLeft = `-${position}px`;
  };

  const moveLeft = () => {
    if (currentImageNumber === 1) {
      currentImageNumber = galleryItems.length + 1;
    }
    if (currentImageNumber > 1) {
      currentImageNumber -= 1;
    }
    position = galleryWidth * (currentImageNumber - 1);
    gallery.style.marginLeft = `-${position}px`;
  };

  prevButton.addEventListener('click', moveLeft, true);
  nextButton.addEventListener('click', moveRight, true);

  images.forEach((i) => {
    i.addEventListener('click', (e) => {
      const img = e.target;
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.mozRequestFullScreen) {
        img.mozRequestFullScreen();
      } else if (img.webkitRequestFullScreen) {
        img.webkitRequestFullScreen();
      }
      img.addEventListener('click', () => {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      });
    });
  });
};
