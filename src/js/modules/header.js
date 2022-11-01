export default function () {

  const body = document.querySelector('.body');
  const menuButton = document.querySelector('.header__toggle');
  const menuList = document.querySelector('.menu__list');
  const menuLink = document.querySelectorAll('.menu__link');

  // Открытие меню
  const toggleMenu = () => {
    menuButton.classList.toggle('header__toggle--close');
    menuList.classList.toggle('menu__list--active');
    body.classList.toggle('overflow-hidden');
  };

  menuButton.addEventListener('click', evt => {
      evt.stopPropagation();
      toggleMenu();
    }
  );

  //Закрытие меню по клику на путкт меню
  const closeMenu = () => {
    menuButton.classList.remove('header__toggle--close');
    menuList.classList.remove('menu__list--active');
    body.classList.remove('overflow-hidden');
  }

  menuLink.forEach(link => {
    link.addEventListener('click', closeMenu);
  })

  // Исчезновение header при скролле
  const header = document.querySelector('.header');
  let scrollPrev = 0;

  window.onscroll = function () {
    let scrolled = window.pageYOffset;
    if (scrolled > 200 && scrolled > scrollPrev) {
      header.classList.add('header--out');
    } else {
      header.classList.remove('header--out');
    }
    scrollPrev = scrolled;
  };

  // Исчезновение button при скролле


  // Плавный переход по якорям

  document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();

      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      // const topOffset = header.offsetHeight; // если не нужен отступ сверху равный высоте header
      const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

}
