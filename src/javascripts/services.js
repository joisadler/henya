export default () => {
  const serviceWrappers = document.querySelectorAll('.service-wrapper');
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

    window.addEventListener('orientationchange', () => {
      if (window.screen.height > window.screen.width &&
         window.screen.width < 768) { // orientation is portrait and it's a mobile phone
        wrapper.style.width = `${window.screen.width * 0.425}px`;
        wrapper1.style.backgroundColor = violetLight;
        wrapper4.style.backgroundColor = violetLight;
        wrapper5.style.backgroundColor = violetLight;
        wrapper8.style.backgroundColor = violetLight;
        wrapper2.style.backgroundColor = violetMedium;
        wrapper3.style.backgroundColor = violetMedium;
        wrapper6.style.backgroundColor = violetMedium;
        wrapper7.style.backgroundColor = violetMedium;
        wrapper7.style.marginLeft = '0';
        wrapper8.style.marginRight = '0';
      } else if (window.screen.height < window.screen.width ||
         window.screen.width >= 768) { // orientation is landscape
        wrapper.style.width = `${window.screen.width * 0.275}px`;
        wrapper1.style.backgroundColor = violetMedium;
        wrapper3.style.backgroundColor = violetMedium;
        wrapper5.style.backgroundColor = violetMedium;
        wrapper7.style.backgroundColor = violetMedium;
        wrapper2.style.backgroundColor = violetLight;
        wrapper4.style.backgroundColor = violetLight;
        wrapper6.style.backgroundColor = violetLight;
        wrapper8.style.backgroundColor = violetLight;
        wrapper7.style.marginLeft = '17.5%';
        wrapper8.style.marginRight = '17.5%';
      }
      wrapper.style.height = `${wrapper.offsetWidth}px`;
    });
  });
};
