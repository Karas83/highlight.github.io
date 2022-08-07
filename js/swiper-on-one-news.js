var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 0,
  loop: true,
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 35
    },
    500: {
      slidesPerView: 1.7,
      spaceBetween: 35
    },
    900: {
      slidesPerView: 2.5,
      spaceBetween: 35
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 35
    }
  }
});