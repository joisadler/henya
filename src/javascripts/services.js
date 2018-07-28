export default () => {
  const serviceWrappers = document.querySelectorAll('.service-wrapper');
  const vw = window.screen.width / 100;
  const wrapper5 = serviceWrappers[4];
  const wrapper6 = serviceWrappers[5];
  const wrapper7 = serviceWrappers[6];
  const wrapper8 = serviceWrappers[7];

  /* eslint-disable no-param-reassign */
  serviceWrappers.forEach((wrapper) => {
    const width = wrapper.offsetWidth;
    wrapper.style.height = `${width}px`;
  });

  window.addEventListener('resize', () => {
    setTimeout(() => {
      const container = document.querySelector('.services-container');
      const containerWidth = container.offsetWidth;
      if (window.screen.height >= window.screen.width) { // portrait
        if (window.screen.width < 768) { // mobile portrait
          serviceWrappers.forEach((wrapper) => {
            wrapper.style.width = `${(containerWidth * 0.5) - (2.5 * vw)}px`;
            wrapper.style.height = `${wrapper.offsetWidth}px`;
            wrapper5.style.marginBottom = '5vw';
            wrapper6.style.marginBottom = '5vw';
            wrapper7.style.marginLeft = '0';
            wrapper8.style.marginRight = '0';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        } else if (window.screen.width < 1280) { // tablet portrait
          serviceWrappers.forEach((wrapper) => {
            wrapper.style.width = `${(containerWidth * 0.33) - (3.3 * vw)}px`;
            wrapper.style.height = `${wrapper.offsetWidth}px`;
            wrapper7.style.marginLeft = '17.5%';
            wrapper8.style.marginRight = '17.5%';
            wrapper5.style.marginBottom = '5vw';
            wrapper6.style.marginBottom = '5vw';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        }
      }
      if (window.screen.height < window.screen.width) { // landscape
        if (window.screen.width < 768) { // mobile landscape
          serviceWrappers.forEach((wrapper) => {
            wrapper.style.width = `${(containerWidth * 0.33) - (3.3 * vw)}px`;
            wrapper.style.height = `${wrapper.offsetWidth}px`;
            wrapper7.style.marginLeft = '17.5%';
            wrapper8.style.marginRight = '17.5%';
            wrapper5.style.marginBottom = '5vw';
            wrapper6.style.marginBottom = '5vw';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        } else if (window.screen.width < 1280) { // tablet landscape
          serviceWrappers.forEach((wrapper) => {
            wrapper.style.width = `${(containerWidth * 0.25) - (3.75 * vw)}px`;
            wrapper.style.height = `${wrapper.offsetWidth}px`;
            wrapper7.style.marginLeft = '0';
            wrapper8.style.marginRight = '0';
            wrapper5.style.marginBottom = '0';
            wrapper6.style.marginBottom = '0';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        } else if (window.screen.width >= 1280) { // big tablet landscape
          serviceWrappers.forEach((wrapper) => {
            wrapper.style.width = `${(containerWidth * 0.25) - (3.75 * vw)}px`;
            wrapper.style.height = `${wrapper.offsetWidth}px`;
            wrapper7.style.marginLeft = '0';
            wrapper8.style.marginRight = '0';
            wrapper5.style.marginBottom = '0';
            wrapper6.style.marginBottom = '0';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        }
      }
    }, 200);
  });
};
