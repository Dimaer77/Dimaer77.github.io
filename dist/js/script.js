let backButton = document.querySelector('.left-btn');
let nextButton = document.querySelector('.right-btn');
$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // dots: false,
        prevArrow: backButton,
        nextArrow: nextButton,
        responsive: [{
                breakpoint: 1145,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 615,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});