jQuery(function( $ ){

    var duration = 400;
    var value = 769;

    var selectBox = $('.works-select div div a');
    var span = $('<span class="see">see the work</span>');
    var circle = $('<div class="circle"></div>');
    var cover = $('<div class="cover"></div>');

    var Box = $('.box1, .box2');
    var boxText = $('.boxText');
    var iconMark = $('.icon-mark-62, .icon-mark-66');

    var navRightArrow = $('.icon-mark-23');
    var navLeftArrow = $('.icon-mark-22');
    var navNext = $('.next');
    var navPrev = $('.prev');
    var worksNav = $('<div class="works_nav"></div>');
    var mainContents = $('.top_view');
    var bgcWhite = $('<div class="bgcWhite"></div>');

    var width = $(window).width();



    /*======================================================================

    Top View Hover animation

    ======================================================================*/
    selectBox.append(circle, cover, span);

    if ( width >= value ) {
        selectBox.on('mouseover', function() {
            $(this).find('.circle').stop(true).animate({
                'width': '200px',
                'height': '200px',
                'opacity': '1'
            }, 400, 'easeInOutExpo');

            $(this).find('.cover').stop(true).animate({
                'opacity': '1'
            }, duration, 'easeInOutExpo');

            $(this).find('span').stop(true).animate({
                'opacity': '1'
            }, 800, 'easeInOutExpo');

        })
        .on('mouseout', function(event) {
            $(this).find('.circle').stop(true).animate({
                'width': '350px',
                'height': '350px',
                'opacity': '0'
            }, duration, 'easeInOutExpo');

            $(this).find('.cover').stop(true).animate({
                'opacity': '0'
            }, duration, 'easeInOutExpo');

            $(this).find('span').stop(true).animate({
                'opacity': '0',
            }, duration);

        });
    };

    if ( width >= value ) {
        Box.on('mouseover', function(event) {
            $(this).find( boxText ).stop(true).animate({
                'top': '7px',
                'opacity': '1'
            }, 100);
            $(this).find( iconMark ).stop(true).animate({
                'top': '-100px',
                'opacity': '0'
            }, 180);
        })
        .on('mouseout', function(event) {
            $(this).find( boxText ).stop(true).animate({
                'top': '100px',
                'opacity': '0'
            }, 100);
            $(this).find( iconMark ).stop(true).animate({
                'top': '0',
                'opacity': '1'
            }, 180);
        });

        navRightArrow.on('mouseover', function(event) {
            navNext.stop(true).animate({
                'opacity': '1',
                'top': '0'
            });
        })
        .on('mouseout', function(event) {
            navNext.stop(true).animate({
                'opacity': '0',
                'top': '20px'
            });
        });

        navLeftArrow.on('mouseover', function(event) {
            navPrev.stop(true).animate({
                'opacity': '1',
                'top': '0'
            });
        })
        .on('mouseout', function(event) {
            navPrev.stop(true).animate({
                'opacity': '0',
                'top': '20px'
            });
        });
    };

    /*======================================================================

    Go to TOP animation

    ======================================================================*/
    $('.icon-mark-21').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        return false;
    });
    /*======================================================================

    Go to TOP animation

    ======================================================================*/

    /*======================================================================

    Scroll Control

    ======================================================================*/
    // $(window).scroll(function(event) {
    //     var pageTop = 400;
    //     var maximage = $('#maximage');
    //     var navArea = $('.works_nav');

    //     if ($(window).scrollTop() > pageTop) {
    //         maximage.fadeOut('100');
    //     } else{
    //         maximage.fadeIn('100');
    //     };
    // });
    /*======================================================================

    Scroll Control END

    ======================================================================*/
});