function isMediaQueryMatch() {
  return window.innerWidth <= 720;
}

$(document).ready(function () {
  $(".header__hamburger").click(function (e) {
    if (isMediaQueryMatch()) {
      $(".header__hamburger, .header__nav").toggleClass("active");
      e.stopPropagation();
    }
  });



  $(document).click(function () {
    if (isMediaQueryMatch()) {
      $(".header__hamburger, .header__nav").removeClass("active");
    }
  });


  $(".header__nav").click(function (e) {
    e.stopPropagation();
  });
});