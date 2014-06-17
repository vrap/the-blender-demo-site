$(function() {
    // Hide back to top button by defaut
    $('#toHome').hide();
    // Smooth scrolling
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
    // Show or hide back to top button
    window.onscroll = function () {
        if($('body').scrollTop() > 200) {
            $('#toHome').fadeIn("slow");
        } else {
            $('#toHome').fadeOut('slow');
        }
    };

});
