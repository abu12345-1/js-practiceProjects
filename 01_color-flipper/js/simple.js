const clrs = ["red", "green", "blue", "yellow", "orange", "pink"];

function changeclr() {
    const num = Math.floor(Math.random() * clrs.length); // Generate a random number directly
    document.body.style.backgroundColor = clrs[num]; // Change background color
}
