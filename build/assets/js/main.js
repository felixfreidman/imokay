"use strict";

// // AJAX-запрос для отправки сообщений на почту, которая указана в админке сайта
// $(function () {
//     $("#orderForm").on("submit", function (e) {
//         e.preventDefault();
//         var name = $("#userName").val();
//         var phone = $("#userPhone").val();
//         var mail = $("#userEmail").val();
//         var order = $("#userOrder").val();
//         var orderDate = $("#orderDate").val();
//         var orderDateTime = $("#orderDateTime").val();
//         var orderAmountPeople = $("#orderAmountPeople").val();
//         var orderTotalTime = $("#orderTotalTime").val();
//         var orderButton = document.querySelector('.order-button');
//         orderButton.textContent = "Подтверждаем";
//         $.ajax({
//             type: "post",
//             url: "/wp-admin/admin-ajax.php",
//             data: {
//                 action: "ajax_form",
//                 name: name,
//                 phone: phone,
//                 mail: mail,
//                 order: order,
//                 orderDate: orderDate,
//                 orderDateTime: orderDateTime,
//                 orderAmountPeople: orderAmountPeople,
//                 orderTotalTime: orderTotalTime,
//             },
//             success: function (response) {
//                 orderButton.textContent = response;
//                 localStorage.removeItem("globalCounter")
//                 localStorage.removeItem("bookedServices")
//                 setTimeout(() => {
//                     window.location.href = "https://parovoz.yurin.biz/services";
//                 }, 1200);
//             },
//         });
//     });
// });
// $(function () {
//     $(".apply-form").on("submit", function (e) {
//         e.preventDefault();
//         var name = $("#reviewName").val();
//         var description = $("#description").val();
//         var rating = $("#starRatingInput").val();
//         var bathType = $("#bathTypeSelect").val();
//         var orderButton = document.querySelector('.form-button');
//         orderButton.textContent = "Подтверждаем";
//         $.ajax({
//             type: "post",
//             url: "/wp-admin/admin-ajax.php",
//             data: {
//                 action: "review_form",
//                 name: name,
//                 description: description,
//                 rating: rating,
//                 bathType: bathType
//             },
//             success: function (response) {
//                 $(".dark-layer").html(response);
//                 closeAppliedForm();
//             },
//         });
//     });
// });
// function closeAppliedForm() {
//     const closeAppliedForm = document.getElementById("closeAppliedForm");
//     const darkLayer__local = document.querySelector(".dark-layer");
//     closeAppliedForm.addEventListener("click", () => {
//         darkLayer__local.classList.toggle("js--hidden");
//     });
// }
// // Проверяем, что все поля важные заполнены
// $(".order-button").on("click", function () {
//     inputAuthorization();
// });
// //   
// // Сама функция проверки полей и добавления дополнительных свойств полю
// function inputAuthorization() {
//     const inputsArray = document.querySelectorAll(".form-input");
//     inputsArray.forEach((input) => {
//         if (!input.value) {
//             const span = addWarningEmptySpan();
//             input.classList.add("form-input--warning");
//             const inputID = input.id;
//             const inputLabel = document.querySelector(`[for=${inputID}]`);
//             inputLabel.appendChild(span);
//         }
//     });
// }
// // Не хотел перегружать функция проверки и прочее, поэтому создание отдельного спана вынес отдельно
// function addWarningEmptySpan() {
//     const warningEmptySpan = document.createElement("span");
//     warningEmptySpan.classList.add("empty--input");
//     return warningEmptySpan;
// }
// // Как только пользователь решился ввести данные, если было предупреждение я удаляю предупреждения всякие
// function deleteWarningSpans() {
//     const inputsArray = document.querySelectorAll(".form-input");
//     inputsArray.forEach((input) => {
//         input.addEventListener("input", () => {
//             const inputID = input.id;
//             const inputLabel = document.querySelector(`[for=${inputID}]`);
//             if (inputLabel.querySelector(".empty--input")) {
//                 const certainSpan = inputLabel.querySelector(".empty--input");
//                 certainSpan.remove();
//                 input.classList.remove("form-input--warning");
//             }
//         });
//     });
// }
// deleteWarningSpans();
var flexCards = document.querySelectorAll('.flex-card');
flexCards.forEach(function (card) {
  card.addEventListener('click', function () {
    card.classList.toggle('flex-card--active');
  });
});
var faqCards = document.querySelectorAll('.faq-parent__card ');
faqCards.forEach(function (card) {
  card.addEventListener('click', function () {
    card.classList.toggle('faq-parent__card--active');
  });
});
var swiperImages = document.querySelectorAll(".preview");
var imgLinkArray = new Array();
var returnValue = 0;
swiperImages.forEach(function (slide) {
  var image = slide.querySelector('img');
  console.log(image);
  var imageSrc = image.src.replace("http://localhost:3000", ".");
  imageSrc = imageSrc.replace("slide", "dot");
  imageSrc = imageSrc.replace("jpg", "png");
  var returnValue = "<img class=\"swiper-preview swiper-pagination-bullet\" src=".concat(imageSrc, ">");
  imgLinkArray.push(returnValue);
});
var watchSwiper = new Swiper('#watchSwiper', {
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
    renderBullet: function renderBullet(index) {
      return imgLinkArray[index];
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var feedbackSwiper = new Swiper('#feedbackSwiper', {
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
    }
  }
});
var functionSwiper = new Swiper('#functionsSwiper', {
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
    }
  }
});
var downloadSwiper = new Swiper('#downloadSwiper ', {
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
    }
  }
});