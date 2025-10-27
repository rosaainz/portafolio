const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
    freeMode: true,
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 25 },
      1024: { slidesPerView: 5, spaceBetween: 30 },
    },
  });
