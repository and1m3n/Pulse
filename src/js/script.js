$(document).ready(function () {
  $('.carusel__inner').slick({
    dots: false,
    speed: 600,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
