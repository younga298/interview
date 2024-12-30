function isMediaQueryMatch() {
  return window.innerWidth >= 480 && window.innerWidth <= 720;
}

$(document).ready(function () {
  // 메뉴 열기 버튼 클릭 이벤트
  $(".header__three-col").click(function () {
    if (isMediaQueryMatch()) {
      $(".header__nav").addClass("active");
    }
  });

  // 메뉴 닫기 버튼 클릭 이벤트
  $(".header__close-btn").click(function () {
    if (isMediaQueryMatch()) {
      $(".header__nav").removeClass("active");
    }
  });
});
