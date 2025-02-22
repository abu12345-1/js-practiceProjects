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

let cartSection = document.querySelector(".cart-bottom");
let cartItemsCount = document.querySelector(".count-items");
let cartTotalPrice = document.querySelector(".current-price strong");
let cartInfo = document.querySelector(".cart-info");
let cartDeleteButton = document.querySelector(".fa-trash-can");

let count = 0;
const pricePerItem = 125.00; // Price of one item
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
addToCartButton.addEventListener("click", function () {
    let selectedQuantity = Number(countdisplay.textContent);

    if (selectedQuantity > 0) {
        // Show cart section
        cartSection.classList.add("active");
        console.log(cartSection);


        // Update item count in cart
        cartItemsCount.textContent = selectedQuantity;

        // Calculate and update total price
        let totalPrice = selectedQuantity * pricePerItem;
        cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;

        // Ensure cart info is visible
        cartInfo.style.display = "flex";
    } else {
        alert("Please add at least one item before adding to the cart.");
    }
});

// Remove items from cart when trash icon is clicked
cartDeleteButton.addEventListener("click", function () {
    cartInfo.style.display = "none"; // Hide cart item
    countdisplay.textContent = "0"; // Reset count display
    count = 0; // Reset count variable
});

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