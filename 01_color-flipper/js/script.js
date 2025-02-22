var a = document.getElementById("input");
var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// var b = document.getElementById("changebg");

function changeclr() {
    let hvalue = "#"
    for (let i = 0; i < 6; i++) {
        hvalue += hex[ranhex()];
    }
    document.body.style.backgroundColor = hvalue;
    document.getElementById("input").textContent = hvalue;
}

function ranhex() {
    return Math.floor(Math.random() * 16)
}