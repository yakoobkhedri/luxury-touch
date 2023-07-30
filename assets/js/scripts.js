// swiper
var swiper = new Swiper(".banner", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".car-details", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 3,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".car-details2", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  thumbs: {
    swiper: swiper,
  },
});
// animation

ScrollReveal().reveal('.top', {
  duration: 2000,
  origin: 'top',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.bottom', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.left', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.right', {
  duration: 2000,
  origin: 'right',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});