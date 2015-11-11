
$(document).ready(function() {
	var height = $(window).height();

    $('#header').css('height', height);
	   

    //Scrollspy plugin
    $('body').scrollspy({ target: '.navbar-spy'});


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

});