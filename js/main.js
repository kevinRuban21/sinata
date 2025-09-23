const swiperHome = new Swiper(".destination_swiper", {
  loop: true,
  slidesPerview: "auto",
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
