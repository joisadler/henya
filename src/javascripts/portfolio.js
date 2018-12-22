
export default () => {
  const portfolio = document.getElementById('portfolio');
  const slider = document.querySelector('.slider');
  const portfolioImages = [...document.querySelectorAll('.portfolio-image')];
  const portfolioImagesUrls = portfolioImages.map(i => i.src);
  const prevButton = portfolio.querySelector('.prev');
  const nextButton = portfolio.querySelector('.next');
  const prevFullScreenButton = slider.querySelector('.slider > .prev');
  const nextFullScreenButton = slider.querySelector('.slider > .next');
  let position = 0;

  const moveRight = () => {
    position += 1;
    if (position === portfolioImagesUrls.length) position = 0;
    slider.style.backgroundImage = `url(${portfolioImagesUrls[position]})`;
  };

  const moveLeft = () => {
    position -= 1;
    if (position < 0) position = portfolioImagesUrls.length - 1;
    slider.style.backgroundImage = `url(${portfolioImagesUrls[position]})`;
  };

  slider.style.backgroundImage = `url(${portfolioImagesUrls[position]})`;

  prevButton.addEventListener('click', moveLeft);
  nextButton.addEventListener('click', moveRight);

  prevFullScreenButton.addEventListener('click', (e) => {
    e.stopPropagation();
    moveLeft();
  });
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
            break;
          case 'ArrowRight':
            moveRight();
            break;
          case 'ArrowUp':
            moveLeft();
            break;
          case 'ArrowDown':
            moveRight();
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
      s.requestFullscreen();
    } else if (s.mozRequestFullScreen) {
      s.mozRequestFullScreen();
    } else if (s.webkitRequestFullScreen) {
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
