var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    effect: "slide",
    thumbs: {
        swiper: swiper,
    },
});

// إعداد العداد
let countdown = 4; // يبدأ من 4 ثواني
const counterElement = document.getElementById("counter");

function updateCounter() {
    counterElement.innerText = countdown; // تحديث قيمة العداد
    countdown--;

    if (countdown < 0) {
        countdown = 4; // إعادة ضبط العداد
    }
}

// تشغيل وإيقاف العداد عند تمرير الماوس
document.querySelector('.mySwiper2').addEventListener('mouseenter', () => {
    swiper2.autoplay.stop();
});

document.querySelector('.mySwiper2').addEventListener('mouseleave', () => {
    swiper2.autoplay.start();
});

// تحديث العداد كل ثانية
setInterval(updateCounter, 1000);

