const swiperImages = document.querySelectorAll(".preview");
let imgLinkArray = new Array();
let returnValue = 0;
swiperImages.forEach(slide => {
    let image = slide.querySelector('img');
    console.log(image);
    let imageSrc = image.src.replace("http://localhost:3000", ".");
    imageSrc = imageSrc.replace("slide", "dot");
    imageSrc = imageSrc.replace("jpg", "png");
    var returnValue = `<img class="swiper-preview swiper-pagination-bullet" src=${imageSrc}>`;
    imgLinkArray.push(returnValue)
})

const watchSwiper = new Swiper('#watchSwiper', {
    direction: 'horizontal',
    loop: false,
    speed: 500,
    spaceBetween: 54,
    effect: 'cards',
    slidesPerView: '1',
    swipeHandler: '.swiper-wrapper',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index) {
            return imgLinkArray[index];
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const feedbackSwiper = new Swiper('#feedbackSwiper', {
    direction: 'horizontal',
    loop: true,
    speed: 500,
    spaceBetween: 34,
    effect: 'cards',
    slidesPerView: '4',
    breakpoints: {
        1900: {
            slidesPerView: 3,
            spaceBetween: 34
        },
        1600: {
            slidesPerView: 2,
            spaceBetween: 34
        },
        950: {
            slidesPerView: 2,
            spaceBetween: 150
        },
        800: {
            slidesPerView: 1.8,
            spaceBetween: 150
        },
        650: {
            slidesPerView: 1.5,
            spaceBetween: 120
        },
        590: {
            slidesPerView: 1.7,
            spaceBetween: 120
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 120
        },
        380: {
            slidesPerView: 0.8,
            spaceBetween: 120
        },
    }
});
const functionSwiper = new Swiper('#functionsSwiper', {
    direction: 'horizontal',
    loop: true,
    speed: 500,
    spaceBetween: 20,
    effect: 'cards',
    slidesPerView: 1,
    breakpoints: {
        1050: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 20
        },
    }
});

const downloadSwiper = new Swiper('#downloadSwiper ', {
    direction: 'horizontal',
    loop: true,
    speed: 500,
    spaceBetween: 50,
    effect: 'cards',
    slidesPerView: 1,
});
