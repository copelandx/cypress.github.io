$('.js-tabs-title').on('click', function () {
    var openTab = $(this).data('tab'),
        linePosition = $(this).position().left;

    $('.js-tabs-underline').css('transform', 'translateX(' + linePosition + 'px)');
    $('.js-tabs-title').removeClass('active');
    $(this).addClass('active');
    $('.js-tabs-content').removeClass('active');
    $(openTab).addClass('active');
});

(function($) {
    "use strict";

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);