$(document).ready(function () {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= 50) {
            $('.navbar').addClass('navbar-fixed');
        } else {
            $('.navbar').removeClass('navbar-fixed');
        }
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});
