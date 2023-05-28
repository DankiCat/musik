/* Настройка хедера */
const header = document.querySelector('header');
const menu = document.querySelector('.header__menu');

window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 0) {
        header.classList.add('header_blue');
        menu.classList.add('header__menu_blue');
    } else {
        header.classList.remove('header_blue');
        menu.classList.remove('header__menu_blue');
    }
});


/* Настройка slick слайдера в секции категорий */
$(document).ready(function(){
    $('.categories__carousel').slick({
        arrows: false,
        variableWidth: true,
        centerMode: true,
        initialSlide: 2,
        focusOnSelect: true,
        touchThreshold: 12,
    });
});

/* Настройка табов в секции расписания */
const tabs = document.querySelectorAll('.schedule__tab');
const tabContent = document.querySelectorAll('.schedule__table .schedule__table-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
  
      tabs.forEach((tab) => tab.classList.remove('schedule__tab_active'));
      tabContent.forEach((tab) => tab.classList.remove('schedule__table-content_active'));
  
      tab.classList.add('schedule__tab_active');
      tabContent[index].classList.add('schedule__table-content_active');
    });
});

/* Настройка slick слайдера в секции рекомендаций */
$(document).ready(function(){
    $('.testimonials__carousel').slick({
        arrows: false,
        variableWidth: true,
        centerMode: true,
        initialSlide: 1,
        focusOnSelect: true,
        touchThreshold: 5,
    });
});

/* Настройка slick слайдера в секции инстаграм постов */
$(document).ready(function(){
    $('.shots__carousel').slick({
        variableWidth: true,
        centerMode: true,
        initialSlide: 2,
        touchThreshold: 12,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    touchThreshold: 5,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    focusOnSelect: true,
                }
            }
        ],
    });
});

/* Настройка адаптивного меню */
const burgerLogos = document.querySelectorAll('.header__burger-logo');
const menuItems = document.querySelectorAll('.header__item');

burgerLogos.forEach((logo, i) => {
    logo.addEventListener('click', () => {
        toggleMenu();
    });
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        toggleMenu();
    })
});

function toggleMenu() {
    burgerLogos.forEach(logo => {
        logo.classList.toggle('header__burger-logo_active');
    });
    menu.classList.toggle('header__menu_active');
}