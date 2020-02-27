
/* ---------------------------------------------
    Preloaded
    --------------------------------------------- */
jQuery(window).on("load", function () {
    jQuery('.preloader-wapper').addClass('loaded');
    if (jQuery('.preloader-wapper').hasClass('loaded')) {
        jQuery('.preloader-main').delay(1200).queue(function () {
            jQuery(this).remove();
        });
    }
});


$(document).ready(function () {

    // For smooth scroling
    $(".nav-link").click(function () {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            $('html, body').stop().animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = '';
            });
        }

    });

    // main menu toggleer icon (Mobile site only)
    $('[data-toggle="navbarToggler"]').click(function () {
        $('.navbar').toggleClass('active');
        $('body').toggleClass('offcanvas--open');
    });

});


//////////////////////// sticky menu /////////////////////
window.onscroll = function () {
    // var scroll = jQuery(window).scrollTop();
    var jQuerystickyNav = jQuery(".navbar-sticky");
    jQuery(window).on("scroll load", function () {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 120) {
            jQuerystickyNav.addClass("navbar-sticky--moved-up");
        } else {
            jQuerystickyNav.removeClass("navbar-sticky--moved-up");
        }
        // apply transition
        if (scroll >= 250) {
            jQuerystickyNav.addClass("navbar-sticky--transitioned");
        } else {
            jQuerystickyNav.removeClass("navbar-sticky--transitioned");
        }
        // sticky on
        if (scroll >= 500) {
            jQuerystickyNav.addClass("navbar-sticky--on");
        } else {
            jQuerystickyNav.removeClass("navbar-sticky--on");
        }

    });

}



$(document).ready(function () {

    // Gets the video src from the data-src on each button
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });

    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })

});

$(document).ready(function () {
    $('.clickme').click(function () {
        $('.clickme').removeClass('btn--bg-primary');
        $(this).addClass('btn--bg-primary');
        var tagid = $(this).data('tag');
        $('.reveal-1').removeClass('active').addClass('hide');
        $('#' + tagid).addClass('active').removeClass('hide');
    });
});

jQuery(document).ready(function ($) {

    $('.testimonial-content2').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
});