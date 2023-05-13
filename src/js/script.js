/* Настройка хедера */
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.classList.add('header_blue');
    } else {
        header.classList.remove('header_blue');
    }
});


/* Настройка slick слайдера */
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