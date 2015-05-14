$(document).ready(function() {
    $('.golf').mouseenter(function() {
            $('.golf-ready').hide();
            $('.golf-swing').show();
     })
        
        .mouseleave(function() {
            $('.golf-swing').hide();
            $('.golf-ready').show();
        })


        .mousedown(function() {
                    $('.golf-swing').hide();
                    $('.golf-up').finish().show();
                    
                    })


        .mouseup(function() {
                    $('.golf-up').hide();
                    $('.golf-ready').show();
        });



        });

