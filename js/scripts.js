//function for sticky navbar
window.addEventListener("scroll", function () {
  var pageHeader = document.querySelector("header");
  pageHeader.classList.toggle("sticky", window.scrollY > 0);
});

// jQuery plugin for owlCarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoWidth: true,
    items: 6,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  // $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  // $(".owl-next").html('<i class="fa fa-chevron-right"></i>');

});
