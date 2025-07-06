$(function () {
  // 상세 팝업 열기
  $(".project__button").on("click", function (e) {
    const targetId = $(this).data("target");
    const targetDiv = $("#popup" + targetId);

    $(".popup").hide();
    if (targetDiv.length) {
      targetDiv.show();
      $("header").hide();
      $("body").addClass("no-scroll");
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

  // IntersectionObserver 기반 애니메이션 트리거 함수
  function createObserver(selector, options = {}, onEnter, onLeave) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onEnter(entry.target);
        } else {
          if (onLeave) onLeave(entry.target);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));
  }

  // 1. profile, resume 애니메이션
  createObserver(
    ".profile__box",
    {},
    (el) => {
      $(el).addClass("visible");
      $(".profile__intro, .profile__skills").addClass("visible");
    },
    (el) => {
      $(el).removeClass("visible");
      $(".profile__intro, .profile__skills").removeClass("visible");
    }
  );

  createObserver(
    ".resume__container",
    {},
    (el) => {
      $(el).addClass("visible");
      $(".resume__details, .resume__skills").addClass("visible");
    },
    (el) => {
      $(el).removeClass("visible");
      $(".resume__details, .resume__skills").removeClass("visible");
    }
  );

  // 2. project header
  createObserver(
    ".project__header",
    {},
    (el) => {
      $(el).addClass("visible");
    },
    (el) => {
      $(el).removeClass("visible");
    }
  );

  // 3. project content
  createObserver(
    ".project__content",
    {
      threshold: 0.1,
    },
    (el) => {
      $(el).addClass("visible");
    },
    (el) => {
      $(el).removeClass("visible");
    }
  );

  // 4. contact section
  createObserver(
    ".contact__container",
    {},
    (el) => {
      $(el).addClass("visible");
      $(
        ".contact__title, .contact__message, .contact__text-detail, .contact__link--github,.contact__link--email"
      ).addClass("visible");
    },
    (el) => {
      $(el).removeClass("visible");
      $(
        ".contact__title, .contact__message, .contact__text-detail, .contact__link"
      ).removeClass("visible");
    }
  );

  // 5. fade-in-up 요소 처리
  createObserver(
    ".fade-in-up",
    {
      threshold: 0.1,
    },
    (el) => {
      $(el).addClass("visible");
    },
    (el) => {
      $(el).removeClass("visible");
    }
  );

  // 페이지 로드 완료 시 초기 스크롤 위치에 따른 처리
  $(window).on("load", function () {
    $(".contact__title span").css({
      "animation-play-state": "paused",
    });
  });

  // 내부 앵커 부드러운 스크롤
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
});
