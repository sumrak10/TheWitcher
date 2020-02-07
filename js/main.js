var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.menu-button',
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
});
