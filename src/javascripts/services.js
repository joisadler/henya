export default () =>  {
  const serviceWrappers = document.querySelectorAll('.service-wrapper');

  serviceWrappers.forEach((wrapper) => {
    const width = wrapper.offsetWidth;
    wrapper.style.height = `${width}px`;
    window.addEventListener('orientationchange', () => {
      if(window.screen.height > window.screen.width){ // orientation is portrait
        console.log('p')
        wrapper.style.width = `${window.screen.width * 0.425}px`;
      } else if (window.screen.height < window.screen.width) { // orientation is landscape
        console.log('l')
        wrapper.style.width = `${window.screen.width * 0.275}px`;
      }
      wrapper.style.height = `${wrapper.offsetWidth}px`;
    });
  });
};
