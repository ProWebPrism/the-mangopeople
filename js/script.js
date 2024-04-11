var swiper = new Swiper(".banner-swiper", {
  loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});


  AOS.init({once: true,});
