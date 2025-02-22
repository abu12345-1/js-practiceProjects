// const mainImage = document.querySelector(".product-img");
// const thumbnails = document.querySelectorAll(".thumbnail");

// thumbnails.forEach(thumbnail => {
//     thumbnail.addEventListener("click", function () {
//         mainImage.src = this.src;
//     });
// });

// image section
const mainImage = document.querySelector(".product-img");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        mainImage.src = this.src.replace("-thumbnail", "");
        // Fixing image path
    });
});


// CART SECTION STARTS
// add product and adding to cart
const countdisplay = document.querySelector(".countdisp")
const subtract = document.querySelector(".sub")
const addition = document.querySelector(".add")
addToCartButton = document.querySelector(".cart-button");

let count = 0;
subtract.addEventListener("click", () => {
    if (count > 0) {
        count -= 1;
        console.log(count);
        countdisplay.textContent = count;
    }
});

addition.addEventListener("click", () => {
    count += 1;
    console.log(count);
    countdisplay.textContent = count;
});

// Cart menu section
var cartsecopen = document.querySelector(".menuimg")
var emptycartshow = document.querySelector(".emptycart")
// var cartsecclose = document.querySelector(".cart")
cartsecopen.addEventListener("click", () => {
    emptycartshow.classList.toggle("active");
});

// Get the value when "Add to Cart" is clicked
addToCartButton.addEventListener("click", function () {
    let selectedQuantity = Number(countdisplay.textContent)
    console.log(selectedQuantity);
});
// sending the value to the cart section


// CART SECTION ENDS

// carousel
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#carouselExampleIndicators");
    if (carousel) {
        new mdb.Carousel(carousel);
    }
});


// carousel toggle
var openmod = document.querySelector(".prod-mainimg")
var carousel = document.querySelector(".image-carousel")
var close = document.querySelector(".close-btn")

openmod.addEventListener("click", () => {
    carousel.classList.add("active");
    console.log(carousel);
});

close.addEventListener("click", () => {
    carousel.classList.remove("active");
});




// // adding to cart
// var addcart = document.querySelector(".cart-button")
// let countDisplay = document.querySelector(".countdisp");
// let addButton = document.querySelector(".add");
// let subButton = document.querySelector(".sub");
// let addToCartButton = document.querySelector(".cart-button");