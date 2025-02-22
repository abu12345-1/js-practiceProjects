const clrs = ["red", "green", "blue", "yellow", "orange", "pink"]
a = document.getElementById("input");

function changeclr() {
    for (let i = 0; i < clrs.length; i++) {
        const num = ranNum();
        // console.log(num);

        document.body.style.backgroundColor = clrs[num];
    }
}
function ranNum() {
    return Math.floor(Math.random() * clrs.length)
}