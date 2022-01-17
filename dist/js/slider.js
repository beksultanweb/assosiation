$(document).ready(function(){
    $('.team__inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});