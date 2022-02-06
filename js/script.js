$(document).ready(function(){
    $('.members-slider').slick({
        arrows: false,
        dots: true,
    });
});


$('.home__srcl-down').on('click', function(event) {
    var target = $('#about');    
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 400);    
});

$('.home-link').on('click', function(event) {
    var target = $('#home');    
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 400);    
});

$('.about-link').on('click', function(event) {
    var target = $('#about');    
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 400);    
});

$('.services-link').on('click', function(event) {
    var target = $('#services');    
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 400);    
});

$('.works-link').on('click', function(event) {
    var target = $('#works');    
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 400);    
});

$('.blog-link').on('click', function(event) {
    var target = $('#blog');    
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 400);    
});

$('.contact-link').on('click', function(event) {
    var target = $('#contact');    
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 400);    
});

$('.header-logo').on('click', function(event) {
    var target = $('#home');    
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 400);    
});