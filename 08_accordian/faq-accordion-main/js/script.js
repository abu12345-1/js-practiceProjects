// var openmod = document.querySelectorAll(".qns");
// var modalshow = document.querySelectorAll(".answer");

// openmod.forEach((qns, index) => {
//     qns.addEventListener("click", () => {
//         modalshow[index].classList.toggle("active");
//     });
// });


var openmod = document.querySelectorAll(".qns");
var modalshow = document.querySelectorAll(".answer");

openmod.forEach((qns, index) => {
    qns.addEventListener("click", () => {
        // First, close all open answers
        modalshow.forEach((answer, i) => {
            if (i !== index) {
                answer.classList.remove("active");
            }
        });

        // Then, toggle the clicked one
        modalshow[index].classList.toggle("active");
    });
});
