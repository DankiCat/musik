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