$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-prev"><img src="images/arrow-left.svg" alt="prev"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-next"><img src="images/arrow-right.svg" alt="next"></button>'
    });

    $('.search__tabs-item').on('click', function(e) {
        e.preventDefault();
        
        $('.search__tabs-item').removeClass('search__tab-active');
        $('.search__content-item').removeClass('search__content-active');

        $(this).addClass('search__tab-active');
        $($(this).attr('href')).addClass('search__content-active');
    });
});