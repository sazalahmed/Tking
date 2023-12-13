$(function () {

    "use strict";

    //======menu fix js======
    if ($('.main_menu').offset() != undefined) {
        var navoff = $('.main_menu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.main_menu').addClass('menu_fix');
            } else {
                $('.main_menu').removeClass('menu_fix');
            }
        });
    }


    //=======SELECT 2 JS====== 
    $(document).ready(function () {
        $('.select_2').select2();
    });


    //======NICE SELECT=======
    $('.select_js').niceSelect();


    //======ANIMATED HEADING=======
    $('.animate-clip').animatedHeadline({
        animationType: 'clip'
    });

    $('.animate-zoom').animatedHeadline({
        animationType: 'zoom'
    });



    //=====calender.js======   
    $(function () {
        var $startDate = $('.start-date');
        var $endDate = $('.end-date');

        $startDate.datepicker({
            autoHide: true,
        });
        $endDate.datepicker({
            autoHide: true,
            startDate: $startDate.datepicker('getDate'),
        });

        $startDate.on('change', function () {
            $endDate.datepicker('setStartDate', $startDate.datepicker('getDate'));
        });
    });


    //======= search quntty ========
    $(".guest_input").on("click", function () {
        $(".quentity_qnty_dropdown").toggleClass("show_qnty");
    });


    //======= advance search ========
    $(".wsus__adv_search_icon").on("click", function () {
        $(".wsus__adv_search_area").addClass("show_search");
    });

    $(".wsus__adv_search_close").on("click", function () {
        $(".wsus__adv_search_area").removeClass("show_search");
    });


    //======destinations slider====== 
    $('.destinations_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });


    // //====== filter item slider ======
    $('.owl-carousel').owlCarousel({
        // autoplay: true,
        nav: false,
        loop: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 3,
                nav: true
            },
            992: {
                items: 2,
                nav: true
            },
            768: {
                items: 1,
                nav: false
            },
            576: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    })


    //==== tooltip=====
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    //====== popular flight slider ======
    $('.popular_flight_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
    });


    //====== testimonial slider ======
    $('.testi_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',

    });

    //=======counter up=========   
    $('.counter').countUp();




});