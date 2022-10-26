import $ from "jquery";
export default function () { 
  $('.tabs-nav__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs-nav__link').removeClass('tabs-nav__link--active');
    $(this).addClass('tabs-nav__link--active');

    $('.businesses__tabs-content-item').removeClass('businesses__tabs-content-item--active');
    $($(this).attr('href')).addClass('businesses__tabs-content-item--active');
  })
}