$(document).ready(function(){
    $('.workers__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 9000,
    });
});

$(document).ready(function(){
    $('.reviews__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
    })
})



$(document).ready(function(){
    $('.workers__slider_adaptive').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 9000,
    });
});


$(document).ready(function(){
    $('.reviews__slider-adaptive').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
    })
})


const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const headerMenu = document.querySelector('.header__menu');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    })
}


const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
            
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});