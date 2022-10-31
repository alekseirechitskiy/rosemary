import $ from "jquery";
import slick from "slick-carousel";

export default function () {
  $('.host-book__contents-navigation').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.contents-slider',
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  $('.contents-slider').slick({
    asNavFor: '.host-book__contents-navigation',
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.06055 14.9395L1.99994 7.96976L8.06055 1.00006" stroke="#454242" stroke-width="2" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.38867 14.9395L7.44928 7.96976L1.38867 1.00006" stroke="#454242" stroke-width="2" /></svg></button>',
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        }
      },
    ]
  });
}