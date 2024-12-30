document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var lastScrollY = 0; // 마지막 스크롤 위치를 저장할 변수

    window.addEventListener('scroll', function () {
        var currentScrollY = window.scrollY; // 현재 스크롤 위치

        if (currentScrollY > lastScrollY) {

            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        // 마지막 스크롤 위치를 업데이트
        lastScrollY = currentScrollY;
    });
});