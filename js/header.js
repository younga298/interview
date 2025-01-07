function isMediaQueryMatch() {
  return window.innerWidth <= 720;
}

$(document).ready(function () {
  // 햄버거 버튼 클릭 이벤트
  $(".header__hamburger").click(function (e) {
    if (isMediaQueryMatch()) {
      $(".header__hamburger, .header__nav").toggleClass("active"); // 메뉴 열기/닫기
      e.stopPropagation(); // body 클릭 이벤트 방지
    }
  });


  // 바디 클릭 이벤트
  $(document).click(function () {
    if (isMediaQueryMatch()) {
      $(".header__hamburger, .header__nav").removeClass("active"); // 메뉴 닫기
    }
  });

  // 메뉴 내부 클릭 시 이벤트 전파 차단
  $(".header__nav").click(function (e) {
    e.stopPropagation();
  });
});