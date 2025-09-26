
const menuBtnElement = document.querySelector('#menuBtn')
const menuMobileListElement = document.querySelector('#menuMobileList')

menuBtnElement.addEventListener('click', function() {
  menuMobileListElement.classList.toggle('menu-open')
})


const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
       spaceBetween: 20,
    }
  }

});