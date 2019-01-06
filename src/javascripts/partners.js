export default () => {
  $(document).ready(() => {
    $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }]
    });
  });
};
