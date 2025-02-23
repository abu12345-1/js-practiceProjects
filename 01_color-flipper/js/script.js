var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// var b = document.getElementById("changebg");
var input=document.getElementById("input")

function changeclr() {
    let hvalue = "#"
    for (let i = 0; i < 6; i++) {
        hvalue += hex[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = hvalue;
    input.textContent = hvalue;
}