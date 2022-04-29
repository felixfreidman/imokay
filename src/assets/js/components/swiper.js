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
});
