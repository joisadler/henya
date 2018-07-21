export default () => {
  const homepage = document.getElementById('home')
  const container = document.querySelector('.home-container');
  const headline = document.querySelector('.home-headline');
  const subheadline = document.querySelector('.home-subheadline');
  const illustration = document.querySelector('.home-illustration');
  const action = document.querySelector('.home-action');
  const homepageHeight = homepage.offsetHeight;
  const containerHeight = container.offsetHeight;

  const animateHomepage = () => {
    homepage.classList.remove('full-screen');
    const bottom = homepageHeight * 0.2;
    const step = bottom / 50;
    let i = 0;

    const timer = setInterval(() => {
      i += step;
      homepage.style.height = `${homepageHeight - i}px`;
      if (i >= bottom) {
        clearInterval(timer);
      }
    }, 1);

    setTimeout(() => {
      let j = 0;
      const timer2 = setInterval(() => {
        j += step;
        homepage.style.height = `${(homepageHeight * 0.8) + j}px`;
        if (j >= bottom) {
          clearInterval(timer2);
        }
      }, 1);
    }, 1000);
  };

  const animateAction = () => {
    let i = 100;
    let j = 0;
    const timer = setInterval(() => {
      i -= 2;
      j = (Math.abs(i - 100) / 100).toFixed(1);
      action.style.top = `${i}px`;
      action.style.opacity = `${(j)}`;
      if (i === 0) {
        clearInterval(timer);
      }
    }, 10);
    animateHomepage();
  };

  const animateSubheadline = () => {
    let i = 3000;
    let j = 0;
    const timer = setInterval(() => {
      i -= 20;
      j += 0.0067;
      subheadline.style.left = `${i}px`;
      subheadline.style.opacity = `${(j).toFixed(1)}`;
      if (i === 0) {
        clearInterval(timer);
      }
    }, 7);
    setTimeout(animateAction, 2500);
  };

  const animateIllustration = () => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      illustration.style.opacity = `${(i / 50).toFixed(1)}`;
      if (i === 50) {
        clearInterval(timer);
      }
    }, 20);
    setTimeout(animateSubheadline, 500);
  };

  const animateHeadline = () => {
    let i = 0;
    const timer1 = setInterval(() => {
      i += 1;
      headline.style.opacity = `${(i / 50).toFixed(1)}`;
      if (i === 50) {
        clearInterval(timer1);
      }
    }, 20);

    setTimeout(() => {
      let j = 0.4;
      const timer2 = setInterval(() => {
        j -= 0.005;
        headline.style.marginTop = `${containerHeight * j}px`;
        if (j < 0.01) {
          clearInterval(timer2);
        }
      }, 12);
    }, 1000);

    setTimeout(animateIllustration, 1000 + 960);
  };

  animateHeadline();
  window.addEventListener('orientationchange', () => {
    homepage.style.height = '100%';
    homepage.style.minHeight = '100%';
  });
};
