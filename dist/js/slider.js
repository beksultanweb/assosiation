$(document).ready(function(){
    $('.team__inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 465,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});