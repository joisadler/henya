export default () => {
  const testimonialImages = document.querySelectorAll('.testimonial-image');
  /* eslint-disable no-param-reassign */
  testimonialImages.forEach((i) => {
    const width = i.offsetWidth;
    i.style.height = `${width}px`;
  });
  window.addEventListener('resize', () => {
    setTimeout(() => {
      testimonialImages.forEach((i) => {
        const width = i.offsetWidth;
        i.style.height = `${width}px`;
      });
    }, 200);
  });
};
