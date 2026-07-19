// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    // ===== One-page navigation =====
    // Collect navbar links that point at a section on this page (e.g. /#publications).
    var $onePageLinks = $('#navbarResponsive .nav-link').filter(function () {
        return this.hash && $(this.hash).length;
    });

    if ($onePageLinks.length) {
        // Close the collapsed mobile menu after tapping a section link.
        $onePageLinks.on('click', function () {
            $('#navbarResponsive').collapse('hide');
        });

        // Highlight the navbar item for whichever section is currently in view.
        var $sections = $onePageLinks.map(function () { return $(this.hash)[0]; });
        var navOffset = 120; // px; a little below the fixed navbar

        var highlightSection = function () {
            var pos = $(window).scrollTop() + navOffset;
            var activeIndex = 0;
            $sections.each(function (i) {
                if ($(this).offset().top <= pos) { activeIndex = i; }
            });
            // Pin the last section when scrolled to the very bottom of the page.
            if ($(window).scrollTop() + $(window).height() >= $(document).height() - 2) {
                activeIndex = $sections.length - 1;
            }
            $onePageLinks.closest('.nav-item').removeClass('active');
            $onePageLinks.eq(activeIndex).closest('.nav-item').addClass('active');
        };

        $(window).on('scroll resize', highlightSection);
        highlightSection();
    }
})
