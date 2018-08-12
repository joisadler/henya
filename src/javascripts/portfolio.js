
export default () => {
  const sliderContainer = document.querySelector('.slider-container');
  const slider = document.querySelector('.slider');
  const images = [...document.querySelectorAll('.portfolio-image')];
  const urls = images.map(i => i.src);
  const prevButton = sliderContainer.querySelector('.prev');
  const nextButton = sliderContainer.querySelector('.next');
  const prevFullScreenButton = slider.querySelector('.slider > .prev');
  const nextFullScreenButton = slider.querySelector('.slider > .next');
  let position = 0;

  const moveRight = () => {
    position += 1;
    if (position === urls.length) position = 0;
    slider.style.backgroundImage = `url(${urls[position]})`;
  };

  const moveLeft = () => {
    position -= 1;
    if (position < 0) position = urls.length - 1;
    slider.style.backgroundImage = `url(${urls[position]})`;
  };

  const improveImageQuality = () => {
    slider.style.backgroundImage = slider.style.backgroundImage.replace(/small/, 'big');
  };

  slider.style.backgroundImage = `url(${urls[position]})`;
  prevButton.addEventListener('click', moveLeft);
  prevFullScreenButton.addEventListener('click', (e) => {
    e.stopPropagation();
    moveLeft();
  });
  nextButton.addEventListener('click', moveRight);
  nextFullScreenButton.addEventListener('click', (e) => {
    e.stopPropagation();
    moveRight();
  });

  if (typeof document.isFullscreen === 'undefined') {
    document.isFullscreen = () =>
      !((document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
      (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
      (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
      (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen));
  }

  if (!(/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    document.addEventListener('keydown', (event) => {
      if (document.isFullscreen()) {
        const key = event.key;
        switch (key) {
          case 'ArrowLeft':
            moveLeft();
            improveImageQuality();
            break;
          case 'ArrowRight':
            moveRight();
            improveImageQuality();
            break;
          case 'Escape':
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            }
            break;
          default:
            break;
        }
      }
    });
  }

  slider.addEventListener('click', (e) => {
    const s = e.target;
    if (s.requestFullscreen) {
      if (!(/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // device is not a mobile phone
        improveImageQuality();
      }
      s.requestFullscreen();
    } else if (s.mozRequestFullScreen) {
      if (!(/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        improveImageQuality();
      }
      s.mozRequestFullScreen();
    } else if (s.webkitRequestFullScreen) {
      if (!(/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        improveImageQuality();
      }
      s.webkitRequestFullScreen();
    }
    slider.addEventListener('click', () => {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    });
  });
};
