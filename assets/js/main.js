// nav scroll start
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("nav_scroll");
    console.log("OK");
  } else {
    $(".nav").removeClass("nav_scroll");
  }
});
// nav scroll end

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 8,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  speed: 5000,
  direction: "horizontal",

  // freeMode: true,
  // autoplay: {
  //   delay: 0,
  //   pauseOnMouseEnter:true,
  //   disableOnInteraction:false,
  // },
  // loopAddBlankSlides:true,
  // cssMode: true,
  // grabCursor: true,
  // loopAdditionalSlides: 2,
  // centeredSlides: true,
  // loopAdditionalSlides: 2
});
