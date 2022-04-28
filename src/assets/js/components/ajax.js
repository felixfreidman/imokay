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

