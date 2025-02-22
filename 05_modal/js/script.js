var openmod = document.getElementById("openmod")
var modalshow = document.getElementById("modalshow")
var close = document.getElementById("closepop")

openmod.addEventListener("click", () => {
    modalshow.classList.add("active");
});

close.addEventListener("click", () => {
    modalshow.classList.remove("active");
});