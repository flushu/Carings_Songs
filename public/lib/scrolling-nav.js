(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if($("#mainNav").length == 0)
      return;
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $("#mainNav").removeClass("navbar-transparent");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#mainNav").addClass("navbar-transparent");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // $('.portfolio-modal').on('show.bs.modal', function (e) {
  //   $(".navbar").addClass("d-none");
  // })
  // $('.portfolio-modal').on('hidden.bs.modal', function (e) {
  //   $(".navbar").removeClass("d-none");
  // })
  $('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

})(jQuery); // End of use strict
