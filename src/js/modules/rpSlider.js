import $ from "jquery";
import slick from "slick-carousel";

export default function () {
  $('.rp-slider').slick({
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"><svg width="11" height="31" viewBox="0 0 11 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 29.9999L1.99939 15.4999L9.5 1" stroke="#F4F4F4" stroke-width="3" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="12" height="31" viewBox="0 0 12 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 29.9999L9.50061 15.4999L2 1" stroke="#F4F4F4" stroke-width="3" /></svg ></button>',
  });
}