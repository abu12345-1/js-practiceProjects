const togglebtn = document.getElementById("close");
const hamburger = document.getElementById("ham");
const sidebar = document.getElementById("sidebar")

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    console.log(sidebar);
});

togglebtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});