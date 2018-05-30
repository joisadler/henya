export default () => {
  document.body.addEventListener('click', (event) => {
    const target = event.target;
    const ticker = document.getElementById('hidden-menu-ticker');
    const label = document.querySelector('.btn-menu');
    const span1 = document.querySelector('.first');
    const span2 = document.querySelector('.second');
    const span3 = document.querySelector('.third');
    const menuIsOpened = ticker.checked;

    function closeMenu() { ticker.checked = false; }

    if (menuIsOpened &&
      target !== ticker &&
      target !== label &&
      target !== span1 &&
      target !== span2 &&
      target !== span3) {
      closeMenu();
    }
  });
};
