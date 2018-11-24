$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        navText: [ '<', '>' ],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});



$(document).ready(function(){

    $('.owl-carousel-2').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '<', '>' ],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});














