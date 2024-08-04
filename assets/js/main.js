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
