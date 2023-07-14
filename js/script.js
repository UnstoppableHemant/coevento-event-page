$(function (){
    $("#supporters-list").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left mr-4"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            //breakpoint from 0 up
            0 :{
                items: 1
            },
            //breakpoint from 480 up
            480 :{
                items: 2
            },
            //breakpoint from 0 up
            768 :{
                items: 4
            }
        }
    });
});