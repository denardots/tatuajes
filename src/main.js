const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// const swiper = new Swiper('.slider-wrapper', {
//   loop: true,
//   grabCursor: true,
//   spacesBetween: 25,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1
//     },
//     768: {
//       slidesPerView: 2
//     },
//     1024: {
//       slidesPerView: 3
//     }
//   }
// });

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate:15,
    stretch:0,
    depth:300,
    modifier:1,
    slideShadows: true,
  },
  loop:true,
});