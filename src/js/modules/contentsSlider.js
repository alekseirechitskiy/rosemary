import $ from "jquery";
import slick from "slick-carousel";

export default function () {
  $('.contents-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.06055 14.9395L1.99994 7.96976L8.06055 1.00006" stroke="#454242" stroke-width="2" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.38867 14.9395L7.44928 7.96976L1.38867 1.00006" stroke="#454242" stroke-width="2" /></svg></button>',
  });
}