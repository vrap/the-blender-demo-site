$(function() {
    $('#toHome').hide();

    $('#toAbout, #toHome').on('click', function(e){
        e.preventDefault();
        
        if($(this).get(0).id == 'toAbout') {
            var target = $('#about');
        } else {
            var target = $('#home');
        }

        $('html, body').stop().animate({
           scrollTop: target.offset().top
        }, 1000);
    });

    window.onscroll = function () {
        if($('body').scrollTop() > 200) {
            $('#toHome').fadeIn("slow");
        } else {
            $('#toHome').fadeOut('slow');
        }
    };

});
