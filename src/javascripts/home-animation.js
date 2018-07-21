export default () => {
  const illustration = document.querySelector('.home-illustration');

  let i = 50;
  const timer = setInterval(() => {
    i -= 1;
    illustration.style.left = `-${i * 3}%`;
    //console.log(illustration.style.left)
    if (i === 0) {
      clearInterval(timer);
      return;
    }
  }, 5)
};
