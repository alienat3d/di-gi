$(function(){
  $(".top-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-arrow slick-prev" type="button"><img class="top-slider__button-img-left" src="images/icons/slider-arrow-left.svg" alt="slider left arrow button"></button>',
    nextArrow:
      '<button class="slick-arrow slick-next" type="button"><img class="top-slider__button-img-right" src="images/icons/slider-arrow-right.svg" alt="slider right arrow button"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});