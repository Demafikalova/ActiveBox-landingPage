$(document).ready(function() {
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".navbar").addClass("navbar-fixed");
    } else {
      $(".navbar").removeClass("navbar-fixed");
    }
  });
   // Smooth Scrolling
    $("#main-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });


  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
});
