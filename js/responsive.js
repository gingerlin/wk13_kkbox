$(function() {

    var width = $( window ).width();
    var scale = $( '#scale' ).val();
    var MIN_WIDTH = 415;
    var MAX_WIDTH = 768;


    function detect_view() {
        console.log(scale + ':' + width)

        // Mobile
        if (width <= MIN_WIDTH) {

            if (scale != 'S') location.href = '../S';

        // Pad
        } else if (width > MIN_WIDTH && width <= MAX_WIDTH) {

            if (scale != 'M') location.href = '../M';

        // PC
        } else {

            if (scale != 'L') location.href = '../L';

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
