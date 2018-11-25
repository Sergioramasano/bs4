$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        navText: [ '<', '>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1344:{
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
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});














