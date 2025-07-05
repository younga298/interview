$(function () {
  // 상세 팝업 열기
  $(".project__button").on("click", function (e) {
    const targetId = $(this).data("target");
    const targetDiv = $("#popup" + targetId);

    $(".popup").hide(); // 모든 팝업 숨김
    if (targetDiv.length) {
      targetDiv.show(); // 해당 팝업 보여줌
      $("header").hide(); // 헤더 숨김 (팝업 우선)
      $("body").addClass("no-scroll"); // 배경 스크롤 막기
    }
  });

  // 팝업 닫기 버튼
  $(".popup__close").on("click", function () {
    $(".popup").hide();
    $("header").show();
    $("body").removeClass("no-scroll");
  });

  // Swiper 슬라이더 초기화
  new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 스크롤 관련 변수들
  const $profileBox = $(".profile__box");
  const $profileLeft = $(".profile__intro");
  const $profileRight = $(".profile__skills");
  const $resumeBox = $(".resume__container");
  const $resLeft = $(".resume__details");
  const $resRight = $(".resume__skills");
  const $titleWorkPro = $(".project__header");
  const $projectListBoxes = $(".project__content");
  const $contactContainer = $(".contact__container");

  const animationOffset = 100; // 애니메이션 트리거 오프셋

  // 스크롤 시 애니메이션 처리 함수
  function handleScroll() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const screenTrigger = windowHeight / 1.2;

    // 1. 프로필 섹션 애니메이션 토글
    if ($profileBox.length) {
      const boxTop = $profileBox.offset().top - scrollTop;
      if (boxTop < screenTrigger) {
        $profileBox.addClass("visible");
        $profileLeft.addClass("visible");
        $profileRight.addClass("visible");
      } else {
        $profileBox.removeClass("visible");
        $profileLeft.removeClass("visible");
        $profileRight.removeClass("visible");
      }
    }

    // 2. 이력서 섹션 애니메이션 토글
    if ($resumeBox.length) {
      const resumeTop = $resumeBox.offset().top - scrollTop;
      if (resumeTop < screenTrigger) {
        $resumeBox.addClass("visible");
        $resLeft.addClass("visible");
        $resRight.addClass("visible");
      } else {
        $resumeBox.removeClass("visible");
        $resLeft.removeClass("visible");
        $resRight.removeClass("visible");
      }
    }

    // 3. 프로젝트 제목 애니메이션 토글
    $titleWorkPro.each(function () {
      const $this = $(this);
      const titleTop = $this.offset().top;
      if (scrollTop + windowHeight - animationOffset > titleTop) {
        $this.addClass("visible");
      } else {
        $this.removeClass("visible");
      }
    });

    // 4. 프로젝트 콘텐츠 및 자식 아이템 애니메이션 토글
    $projectListBoxes.each(function () {
      const $this = $(this);
      const elementTop = $this.offset().top;
      const elementHeight = $this.outerHeight();

      if (
        (scrollTop + windowHeight - animationOffset > elementTop &&
          scrollTop < elementTop + elementHeight) ||
        scrollTop === 0
      ) {
        $this.addClass("visible"); // 부모 박스에 visible 추가
        // 자식 .project__item은 CSS에서 transition-delay로 순차 애니메이션 처리하므로 JS에서 따로 추가 X
      } else {
        $this.removeClass("visible");
      }
    });

    // 5. contact 섹션 및 자식 요소 애니메이션 토글
    if ($contactContainer.length) {
      const containerTop = $contactContainer.offset().top - scrollTop;
      if (containerTop < screenTrigger) {
        $contactContainer.addClass("visible");
        $(
          ".contact__title, .contact__message, .contact__text-detail, .contact__link--github,.contact__link--email"
        ).addClass("visible");
      } else {
        $contactContainer.removeClass("visible");
        $(
          ".contact__title, .contact__message, .contact__text-detail, .contact__link"
        ).removeClass("visible");
      }
    }

    // 6. fade-in-up 클래스 요소 처리
    $(".fade-in-up").each(function () {
      const $el = $(this);
      const elTop = $el.offset().top;
      if (scrollTop + windowHeight - 100 > elTop || scrollTop === 0) {
        $el.addClass("visible");
      } else {
        $el.removeClass("visible");
      }
    });
  }

  // 스크롤 이벤트에 디바운스 적용
  let scrollTimeout;
  $(window).on("scroll", function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleScroll, 150);
  });

  // 페이지 로드 완료 시 애니메이션 상태 초기화 및 호출
  $(window).on("load", function () {
    setTimeout(() => {
      handleScroll(); // 초기 스크롤 위치에 따른 visible 토글
    }, 300);
  });

  // 내부 앵커 태그 클릭 시 부드럽게 스크롤 이동
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });

  // contact__title span 애니메이션 초기 정지
  $(".contact__title span").css({
    "animation-play-state": "paused",
  });
});
