document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var lastScrollY = 0;

    window.addEventListener('scroll', function () {
        var currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {

            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        lastScrollY = currentScrollY;
        console.log(window.scrollY);
    });
});

$('.popup__details').scrollTop(0);