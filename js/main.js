
// 팝업창 들어가기

$(document).ready(function () {
  // 'Details' 링크에 대한 클릭 이벤트 리스너 설정
  $('.project__button').on('click', function (e) {
    e.preventDefault(); // 기본 동작 방지
    var targetId = $(this).data('target'); // data-target 속성 값 가져오기
    var targetDiv = $('#popup' + targetId); // 대상 div 선택

    //popup 숨기기
    $('.popup').hide();

    // 선택한 popup 보이기
    if (targetDiv.length) {
      targetDiv.show();
      // header 숨기기
      $('header').hide();
      // body 스크롤 숨기기
      $('body').css('overflow-y', 'hidden');
    }
  });


  //닫기 버튼 설정

  $('.popup__close').on('click', function () {
    //popup 숨기기
    $('.popup').hide();
    // header 다시 보이기
    $('header').show();
    //body 스크롤 hidden 이면 ''
    $('body').css('overflow-y', '');
  })
});

// WORKS_POP 팝업창 스와이퍼

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

//profile페이지 opacity 설정

$(document).ready(function () {
  const $profileBox = $('.profile__box');
  const $profileLeft = $('.profile__intro');
  const $profileRight = $('.profile__skills');

  function handleScroll() {
    const profileBoxPosition = $profileBox.offset().top - $(window).scrollTop();
    const screenPosition = $(window).height() / 1.2;

    if (profileBoxPosition < screenPosition) {
      if (!$profileBox.hasClass('visible')) {
        $profileBox.addClass('visible');
        $profileLeft.addClass('visible');
        $profileRight.addClass('visible');
      }
    } else {
      if ($profileBox.hasClass('visible')) {
        $profileBox.removeClass('visible');
        $profileLeft.removeClass('visible');
        $profileRight.removeClass('visible');
      }
    }
  }

  $(window).on('scroll', handleScroll); // scroll 이벤트 등록
  handleScroll(); // 초기 로드 시 스크롤 위치를 확인
});



//RESUME페이지 opacity 설정

$(document).ready(function () {
  const $resumeBox = $('.resume__container');
  const $resLeft = $('.resume__details');
  const $resRight = $('.resume__skills');

  function handleScroll() {
    const resumeBoxPosition = $resumeBox.offset().top - $(window).scrollTop();
    const screenPosition = $(window).height() / 1.2;

    if (resumeBoxPosition < screenPosition) {
      if (!$resumeBox.hasClass('visible')) {
        $resumeBox.addClass('visible');
        $resLeft.css({ opacity: 1, transform: 'translateX(0)' });
        $resRight.css({ opacity: 1, transform: 'translateX(0)' });
      }
    } else {
      if ($resumeBox.hasClass('visible')) {
        $resumeBox.removeClass('visible');
        $resLeft.css({ opacity: 0, transform: 'translateX(-100px)' });
        $resRight.css({ opacity: 0, transform: 'translateX(100px)' });
      }
    }
  }

  $(window).on('scroll', handleScroll);
  handleScroll();
});


//project페이지 스크롤이벤트

$(document).ready(function () {
  var $titleWorkPro = $('.project__header');
  var $projectListBoxes = $('.project__content');
  var animationOffset = 100; // 애니메이션 시작 오프셋

  function checkVisibility() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    // title_work_pro 애니메이션
    $titleWorkPro.each(function () {
      var $this = $(this);
      var titleOffset = $this.offset().top;

      if (scrollTop + windowHeight - animationOffset > titleOffset) {
        $this.css({
          'transform': 'translateX(0)',
          'opacity': '1',
          'transition': 'transform 0.6s ease-out, opacity 0.6s ease-out'
        });
      } else {
        $this.css({
          'transform': 'translateX(100%)',  // 요소 자체의 너비만큼 이동
          'opacity': '0'
        });
      }
    });

    // PROJECT_list_box 애니메이션
    $projectListBoxes.each(function () {
      var $this = $(this);
      var elementOffset = $this.offset().top;
      var elementHeight = $this.outerHeight();

      if (scrollTop + windowHeight - animationOffset > elementOffset && scrollTop < elementOffset + elementHeight) {
        $this.css({
          'transform': 'translateY(0)',
          'opacity': '1'
        });
      } else {
        $this.css({
          'transform': 'translateY(100px)',
          'opacity': '0'
        });
      }
    });
  }

  $(window).on('scroll', function () {
    checkVisibility();
  });

  // 페이지 로드 시 초기 상태 확인
  checkVisibility();
});


// A 태그 자연스럽게 이동하는 이벤트
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // 기본 앵커 이동 방지

    var target = document.querySelector(this.getAttribute('href'));
    if (target) { // 대상 요소가 존재하는지 확인
      window.scrollTo({ // 스크롤 이동
        top: target.offsetTop, // 대상 요소의 상단 위치
        behavior: 'smooth' // 부드러운 스크롤 효과 적용
      });
    }
  });
});









var colour = "random"; // in addition to "random" can be set to any valid colour eg "#f0f" or "red"
var sparkles = 50;

/****************************
*  Tinkerbell Magic Sparkle *
*(c)2005-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();

window.onload = function () {
  if (document.getElementById) {
    var i, rats, rlef, rdow;
    for (var i = 0; i < sparkles; i++) {
      var rats = createDiv(3, 3);
      rats.style.visibility = "hidden";
      rats.style.zIndex = "999";
      document.body.appendChild(tiny[i] = rats);
      starv[i] = 0;
      tinyv[i] = 0;
      var rats = createDiv(5, 5);
      rats.style.backgroundColor = "transparent";
      rats.style.visibility = "hidden";
      rats.style.zIndex = "999";
      var rlef = createDiv(1, 5);
      var rdow = createDiv(5, 1);
      rats.appendChild(rlef);
      rats.appendChild(rdow);
      rlef.style.top = "2px";
      rlef.style.left = "0px";
      rdow.style.top = "0px";
      rdow.style.left = "2px";
      document.body.appendChild(star[i] = rats);
    }
    set_width();
    sparkle();
  }
}

function sparkle() {
  var c;
  if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
    ox = x;
    oy = y;
    for (c = 0; c < sparkles; c++) if (!starv[c]) {
      star[c].style.left = (starx[c] = x) + "px";
      star[c].style.top = (stary[c] = y + 1) + "px";
      star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
      star[c].childNodes[0].style.backgroundColor = star[c].childNodes[1].style.backgroundColor = (colour == "random") ? newColour() : colour;
      star[c].style.visibility = "visible";
      starv[c] = 50;
      break;
    }
  }
  for (c = 0; c < sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i] += 1 + Math.random() * 3;
    starx[i] += (i % 5 - 2) / 5;
    if (stary[i] < shigh + sdown) {
      star[i].style.top = stary[i] + "px";
      star[i].style.left = starx[i] + "px";
    }
    else {
      star[i].style.visibility = "hidden";
      starv[i] = 0;
      return;
    }
  }
  else {
    tinyv[i] = 50;
    tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
    tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
    tiny[i].style.width = "2px";
    tiny[i].style.height = "2px";
    tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
    star[i].style.visibility = "hidden";
    tiny[i].style.visibility = "visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i] == 25) {
    tiny[i].style.width = "1px";
    tiny[i].style.height = "1px";
  }
  if (tinyv[i]) {
    tinyy[i] += 1 + Math.random() * 3;
    tinyx[i] += (i % 5 - 2) / 5;
    if (tinyy[i] < shigh + sdown) {
      tiny[i].style.top = tinyy[i] + "px";
      tiny[i].style.left = tinyx[i] + "px";
    }
    else {
      tiny[i].style.visibility = "hidden";
      tinyv[i] = 0;
      return;
    }
  }
  else tiny[i].style.visibility = "hidden";
}

document.onmousemove = mouse;
function mouse(e) {
  if (e) {
    y = e.pageY;
    x = e.pageX;
  }
  else {
    set_scroll();
    y = event.y + sdown;
    x = event.x + sleft;
  }
}

window.onscroll = set_scroll;
function set_scroll() {
  if (typeof (self.pageYOffset) == 'number') {
    sdown = self.pageYOffset;
    sleft = self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown = document.body.scrollTop;
    sleft = document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft = document.documentElement.scrollLeft;
    sdown = document.documentElement.scrollTop;
  }
  else {
    sdown = 0;
    sleft = 0;
  }
}

window.onresize = set_width;
function set_width() {
  var sw_min = 999999;
  var sh_min = 999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth > 0) sw_min = document.documentElement.clientWidth;
    if (document.documentElement.clientHeight > 0) sh_min = document.documentElement.clientHeight;
  }
  if (typeof (self.innerWidth) == 'number' && self.innerWidth) {
    if (self.innerWidth > 0 && self.innerWidth < sw_min) sw_min = self.innerWidth;
    if (self.innerHeight > 0 && self.innerHeight < sh_min) sh_min = self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min) sw_min = document.body.clientWidth;
    if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min) sh_min = document.body.clientHeight;
  }
  if (sw_min == 999999 || sh_min == 999999) {
    sw_min = 800;
    sh_min = 600;
  }
  swide = sw_min;
  shigh = sh_min;
}

function createDiv(height, width) {
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height + "px";
  div.style.width = width + "px";
  div.style.overflow = "hidden";
  return (div);
}

function newColour() {
  var c = new Array();
  c[0] = 255;
  c[1] = Math.floor(Math.random() * 256);
  c[2] = Math.floor(Math.random() * (256 - c[1] / 2));
  c.sort(function () { return (0.5 - Math.random()); });
  return ("rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")");
}
// ]]>
