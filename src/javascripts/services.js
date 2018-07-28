export default () => {
  const serviceWrappers = document.querySelectorAll('.service-wrapper');
  const vw = window.screen.width / 100;
  const wrapper1 = serviceWrappers[0];
  const wrapper2 = serviceWrappers[1];
  const wrapper3 = serviceWrappers[2];
  const wrapper4 = serviceWrappers[3];
  const wrapper5 = serviceWrappers[4];
  const wrapper6 = serviceWrappers[5];
  const wrapper7 = serviceWrappers[6];
  const wrapper8 = serviceWrappers[7];
  const violetLight = '#CB74C0';
  const violetMedium = '#BC3895';

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
            // console.log('mobile portrait')
            wrapper.style.width = `${(containerWidth * 0.5) - (2.5 * vw)}px`;
            wrapper.style.height = `${wrapper.offsetWidth}px`;
            // wrapper1.style.backgroundColor = violetLight;
            // wrapper4.style.backgroundColor = violetLight;
            // wrapper5.style.backgroundColor = violetLight;
            // wrapper8.style.backgroundColor = violetLight;
            // wrapper2.style.backgroundColor = violetMedium;
            // wrapper3.style.backgroundColor = violetMedium;
            // wrapper6.style.backgroundColor = violetMedium;
            // wrapper7.style.backgroundColor = violetMedium;
            wrapper5.style.marginBottom = '5vw';
            wrapper6.style.marginBottom = '5vw';
            wrapper7.style.marginLeft = '0';
            wrapper8.style.marginRight = '0';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        } else if (window.screen.width < 1280) { // tablet portrait
          serviceWrappers.forEach((wrapper) => {
            // console.log('tablet portrait')
            wrapper.style.width = `${(containerWidth * 0.33) - (3.3 * vw)}px`;
            wrapper.style.height = `${wrapper.offsetWidth}px`;
            // wrapper1.style.backgroundColor = violetMedium;
            // wrapper3.style.backgroundColor = violetMedium;
            // wrapper5.style.backgroundColor = violetMedium;
            // wrapper7.style.backgroundColor = violetMedium;
            // wrapper2.style.backgroundColor = violetLight;
            // wrapper4.style.backgroundColor = violetLight;
            // wrapper6.style.backgroundColor = violetLight;
            // wrapper8.style.backgroundColor = violetLight;
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
            // console.log('mobile landscape')
            wrapper.style.width = `${(containerWidth * 0.33) - (3.3 * vw)}px`;
            wrapper.style.height = `${wrapper.offsetWidth}px`;
            // wrapper1.style.backgroundColor = violetMedium;
            // wrapper3.style.backgroundColor = violetMedium;
            // wrapper5.style.backgroundColor = violetMedium;
            // wrapper7.style.backgroundColor = violetMedium;
            // wrapper2.style.backgroundColor = violetLight;
            // wrapper4.style.backgroundColor = violetLight;
            // wrapper6.style.backgroundColor = violetLight;
            // wrapper8.style.backgroundColor = violetLight;
            wrapper7.style.marginLeft = '17.5%';
            wrapper8.style.marginRight = '17.5%';
            wrapper5.style.marginBottom = '5vw';
            wrapper6.style.marginBottom = '5vw';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        } else if (window.screen.width < 1280) { // tablet landscape
          serviceWrappers.forEach((wrapper) => {
            // console.log('tablet landscape')
            wrapper.style.width = `${(containerWidth * 0.25) - (3.75 * vw)}px`;
            wrapper.style.height = `${wrapper.offsetWidth}px`;
            // wrapper1.style.backgroundColor = violetMedium;
            // wrapper3.style.backgroundColor = violetMedium;
            // wrapper6.style.backgroundColor = violetMedium;
            // wrapper8.style.backgroundColor = violetMedium;
            // wrapper2.style.backgroundColor = violetLight;
            // wrapper4.style.backgroundColor = violetLight;
            // wrapper5.style.backgroundColor = violetLight;
            // wrapper7.style.backgroundColor = violetLight;
            wrapper7.style.marginLeft = '0';
            wrapper8.style.marginRight = '0';
            wrapper5.style.marginBottom = '0';
            wrapper6.style.marginBottom = '0';
            wrapper7.style.marginBottom = '0';
            wrapper8.style.marginBottom = '0';
          });
        } else if (window.screen.width >= 1280) { // big tablet landscape
          serviceWrappers.forEach((wrapper) => {
            // console.log('big tablet landscape')
            wrapper.style.width = `${(containerWidth * 0.25) - (3.75 * vw)}px`;
            wrapper.style.height = `${wrapper.offsetWidth}px`;
            // wrapper1.style.backgroundColor = violetMedium;
            // wrapper3.style.backgroundColor = violetMedium;
            // wrapper6.style.backgroundColor = violetMedium;
            // wrapper8.style.backgroundColor = violetMedium;
            // wrapper2.style.backgroundColor = violetLight;
            // wrapper4.style.backgroundColor = violetLight;
            // wrapper5.style.backgroundColor = violetLight;
            // wrapper7.style.backgroundColor = violetLight;
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
