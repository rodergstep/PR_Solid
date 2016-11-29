$(document).ready(function() {
    // SinglePage Navigation
    $('.single-page-nav').singlePageNav({
        // offset for sticky navigation menu
        // offset: $('.single-page-nav').outerHeight(),
        filter: ':not(.external)',
        updateHash: false,
    });

    /*calling of lightbox plugin */
    $('a[data-rel^=lightcase]').lightcase();

    // Begin of icon-menu transfomation (hamburger)
    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
    });
    // End of icon-menu transfomation

    // Begin of dropdown menu
    var touch = $('#touch-menu');
    var menu = $('.nav');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function() {
        var wid = $(window).width();
        if (wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    // End of dropdown menu
});

/*filtering of tiles*/
(function($) {

    'use strict';

    var $filters = $('.filter [data-filter]'),
        $boxes = $('.boxes [data-category]');

    $filters.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);

        $filters.removeClass('active');
        $this.addClass('active');

        var $filterColor = $this.attr('data-filter');

        if ($filterColor == 'all') {
            $boxes.removeClass('is-animated')
                .fadeOut().finish().promise().done(function() {
                    $boxes.each(function(i) {
                        $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
                    });
                });
        } else {
            $boxes.removeClass('is-animated')
                .fadeOut().finish().promise().done(function() {
                    $boxes.filter('[data-category = "' + $filterColor + '"]').each(function(i) {
                        $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
                    });
                });
        }
    });
    /*END of filtering of tiles*/

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

})(jQuery);