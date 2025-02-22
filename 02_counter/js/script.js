let countdisp = document.getElementById("countdisp")
let inc = document.getElementById("incr")
let decr = document.getElementById("decr")
let zero = document.getElementById("rese")
let count = 0

inc.addEventListener("click", () => {
    count += 1;
    countdisp.textContent = count;
    countdisp.style.color = "green"
});

decr.addEventListener("click", () => {
    count -= 1;
    countdisp.textContent = count;
    countdisp.style.color = "red"
});

zero.addEventListener("click", () => {
    count = 0;
    countdisp.textContent = count;
    countdisp.style.color = "blue"
});