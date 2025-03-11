let swiper = new Swiper(".slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 25000,
        disableOnInteraction: false
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});