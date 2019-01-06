export default () => {
  // setTimeout(() => {
  //   const viewheight = $(window).height();
  //   const viewwidth = $(window).width();
  //   const viewport = document.querySelector('meta[name=viewport]');
  //   viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0`);
  // }, 300);

  const viewport = document.querySelector('meta[name=viewport]');
  let viewheight = $(window).height();
  let viewwidth = $(window).width();
  $('input, textarea').focus(() => {
    viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0, shrink-to-fit=no`);
    window.addEventListener('orientationchange', () => {
      viewheight = window.innerWidth;
      viewwidth = window.innerHeight;
      viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0, shrink-to-fit=no`);
    });
    // viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0, shrink-to-fit=no`);
  });

  $('input, textarea').blur(() => {
    viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0, shrink-to-fit=no`);
    window.addEventListener('orientationchange', () => {
      viewheight = window.outerWidth;
      viewwidth = window.outerHeight;
      viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0, shrink-to-fit=no`);
    });
    // viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0, shrink-to-fit=no`);
  });
};
