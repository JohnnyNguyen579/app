var swiper = new Swiper(".slider-content__heading", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".buttun-next__heading",
    prevEl: ".buttun-prev__heading",
  },
  effect: 'fade',
});

var swiper = new Swiper(".container-slider__slide", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".container-slider__button-next",
    prevEl: ".container-slider__button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

var swiper = new Swiper(".content-container__slide-1", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".content-slider__button-next",
    prevEl: ".content-slider__button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

var swiper = new Swiper(".content-container__slide-2", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".content-slider__button-next",
    prevEl: ".content-slider__button-prev",
  },
});
