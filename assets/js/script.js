'use strict'

/*
========================================
    Preloader
========================================
*/
$(window).on('load', function() {
    $('#preloader').delay(200).fadeOut('slow');
    $('body').delay(200).css({
        'overflow': 'visible'
    });
});

/* responsive menu  */

jQuery(document).ready(function() {
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanRevealPosition: "right",
    });
});

/* ===============================================
        AddClass menu js
   ===============================================
*/

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".navigation-area").addClass("shrinkheader");
    } else {
        $(".navigation-area").removeClass("shrinkheader");
    }
});

/* 
========================================
    data background
========================================
*/
$(document).ready(function() {

    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function() {
        $(this).css("background", $(this).attr("data-bg-color"))
    });

});


/* 
========================================
    Nice Select
========================================
*/

$(document).ready(function() {
    $('select').niceSelect();
});



/* Review Slider */

$('.review-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
});

/* 
========================================
    Wow Animation
========================================
*/

new WOW().init();