$(function () {
  var $carousel = $("#services_carousel");
  // Handle carousel
  $carousel.slick({
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 5,
    arrows: false,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Handle slick navigation
  $("#prev_services").click(function () {
    $carousel.slick("slickPrev");
  });
  $("#next_services").click(function () {
    $carousel.slick("slickNext");
  });

  /*
Initialize AOS after Slick to prevent library conflicts
*/

  $(window).on("scroll", function () {
    // animated on scroll
    AOS.init({
      duration: 300,
      disable: function () {
        let maxWidth = 999;
        return window.innerWidth < maxWidth;
      },
      once: false,
    });
  });
});
