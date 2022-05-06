const flexCards = document.querySelectorAll('.flex-card');
flexCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flex-card--active')
    })
})
const faqCards = document.querySelectorAll('.faq-parent__card ');
faqCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('faq-parent__card--active')
    })
})


const burgerMenu = document.querySelector(".mobile-header__burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileNavigation = document.getElementById("mobileNavigation");
const allLinks = mobileNavigation.querySelectorAll(".navigation-link");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("mobile-header__burger-menu--active");
    mobileMenu.classList.toggle("mobile-menu--active");
    document.querySelector("body").classList.toggle("disable-body");
});

allLinks.forEach((link) => {
    link.addEventListener("click", () => {
        burgerMenu.classList.toggle("mobile-header__burger-menu--active");
        mobileMenu.classList.toggle("mobile-menu--active");
        document.querySelector("body").classList.toggle("disable-body");
    });
});

const darkLayer = document.querySelector(".dark-layer");
const applyBtns = document.querySelector(".buy-parent__button");
const closeForm = document.getElementById("closeForm");
applyBtns.addEventListener("click", () => {
    darkLayer.classList.toggle("js--hidden");
});


closeForm.addEventListener("click", () => {
    darkLayer.classList.toggle("js--hidden");
});

$(document).ready(function () {
    $("#userPhone").inputmask();
});

window.onclick = function (event) {
    if (event.target == darkLayer) {
        darkLayer.classList.toggle("js--hidden");
    }
};