$('.footer-top__title').on('click', function () {
  $(this).siblings().slideToggle(1500);
});

$('.header-banner__close').on('click', function () {
  $('.header-banner').slideUp(700);
});

$('.header-nav__item').on('click', function () {
  $('.header-nav__menu', this).slideToggle();
  $('.arrow', this).toggleClass('arrow-active');
});

$('.header-menu__item').on('click', function () {
  $('.header-menu__content', this).slideToggle();
  $('.arrow', this).toggleClass('arrow-active');
});

$('.header-info__call-back').on('click', function () {
  $('.header-info__down', this).slideToggle(800);
  $('.arrow', this).toggleClass('arrow-active');
});


$('.banner-slider').slick({
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-next.svg" alt=""></button>'
});

$('.banner-card__slider').slick({
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-next.svg" alt=""></button>'
});


$('.banner-card__heart').on('click', function name(params) {
  $('.heart', this).toggleClass('heart--add');
})

$('.gallery-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-next.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    },
  ]
});

$('.star').rateYo({
  starWidth: "24px",
  normalFill: "#A0A0A0",
  "starSvg": '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.849 4.52013L8 1.00513L6.151 4.52013C6.02038 4.77699 5.83131 4.99962 5.599 5.17013C5.36556 5.34151 5.09543 5.4562 4.81 5.50513L1 6.25213L3.66 9.43313C4.02377 9.83181 4.19542 10.3694 4.13 10.9051L3.624 15.0051L7.132 13.3051C7.40262 13.1741 7.69931 13.1057 8 13.1051C8.28212 13.106 8.55991 13.1746 8.81 13.3051L12.4 14.9001L11.894 10.8491C11.83 10.3146 12.002 9.77868 12.365 9.38113L15 6.25213L11.19 5.50513C10.9042 5.45635 10.6337 5.34165 10.4 5.17013C10.1681 4.9995 9.97934 4.77688 9.849 4.52013Z" fill="#FFA500" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
});

$('.review-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-next.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ] 
})

$('.header-menu__hamburger').on('click', function name(params) {
  $('.header-menu__inner').toggleClass('header-menu__inner--show');
});

$('.header-menu__close').on('click', function name(params) {
  $('.header-menu__inner').removeClass('header-menu__inner--show');
});







