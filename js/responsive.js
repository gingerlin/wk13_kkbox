$(function() {

    var width = $( window ).width();
    var MIN_WIDTH = 320;
    var MAX_WIDTH = 768;


    function detect_view() {

        // Mobile
        if (width <= MIN_WIDTH) {

            if (scale != 'S') location.replace('../S');

        // Pad
        } else if (width > MIN_WIDTH && width <= MAX_WIDTH) {

            if (scale != 'M') location.replace('../M');

        // PC
        } else {

            if (scale != 'L') location.replace('../L');
        }

    }

    $( window ).resize(function() {
        if ($(this).width() != width){
            width = $(this).width();
            detect_view();
        }
    });

    detect_view();
});
