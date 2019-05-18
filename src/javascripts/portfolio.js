
export default () => {
  const portfolio = document.getElementById('portfolio');
  const slider = document.querySelector('.portfolio-slider');
  const portfolioImages = [...document.querySelectorAll('.portfolio-image')];
  const portfolioImagesUrls = portfolioImages.map(i => i.getAttribute('data-src'));
  const prevButton = portfolio.querySelector('.prev');
  const nextButton = portfolio.querySelector('.next');
  const prevFullScreenButton = slider.querySelector('.portfolio-slider > .prev');
  const nextFullScreenButton = slider.querySelector('.portfolio-slider > .next');
  let position = 0;
  let paused = false;

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
  setTimeout(() => {
    portfolioImages.forEach(i => i.setAttribute('src', i.getAttribute('data-src')));
    setInterval(() => {
      if (paused) return;
      moveRight();
    }, 2500);
  }, 2500);

  prevButton.addEventListener('click', () => {
    paused = true;
    moveLeft();
    setTimeout(() => {
      paused = false;
    }, 5000);
  });
  nextButton.addEventListener('click', () => {
    paused = true;
    moveRight();
    setTimeout(() => {
      paused = false;
    }, 5000);
  });
  // nextButton.addEventListener('click', moveRight);

  prevFullScreenButton.addEventListener('click', (e) => {
    e.stopPropagation();
    paused = true;
    moveLeft();
    setTimeout(() => {
      paused = false;
    }, 5000);
  });
  nextFullScreenButton.addEventListener('click', (e) => {
    e.stopPropagation();
    paused = true;
    moveRight();
    setTimeout(() => {
      paused = false;
    }, 5000);
  });

  if (typeof document.isFullscreen === 'undefined') {
    document.isFullscreen = () =>
      !((document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
      (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
      (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
      (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen));
  }

  document.addEventListener('keydown', (event) => {
    if (document.isFullscreen()) {
      // eslint-disable-next-line prefer-destructuring
      const key = event.key;
      switch (key) {
        case 'ArrowLeft':
          paused = true;
          moveLeft();
          setTimeout(() => {
            paused = false;
          }, 5000);
          break;
        case 'ArrowRight':
          paused = true;
          moveRight();
          setTimeout(() => {
            paused = false;
          }, 5000);
          break;
        case 'ArrowUp':
          paused = true;
          moveLeft();
          setTimeout(() => {
            paused = false;
          }, 5000);
          break;
        case 'ArrowDown':
          paused = true;
          moveRight();
          setTimeout(() => {
            paused = false;
          }, 5000);
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
