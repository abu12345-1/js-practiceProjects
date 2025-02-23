// Getting form elements
let form = document.querySelector(".form");
let fname = document.querySelector(".firstname");
let lname = document.querySelector(".lastname");
let email = document.querySelector(".email");
let tarea = document.querySelector(".txt-area");

// Getting error message spans
let fnerror = document.getElementById("fnameerror");
let lnerror = document.getElementById("lnameerror");
let emerror = document.getElementById("emailerror");
let merror = document.getElementById("msgerror")

// Form submission event
form.addEventListener('click', (e) => {
    let isValid = true;

    // Validate First Name
    if (fname.value.trim() === "") {
        fnerror.textContent = "Please enter the first name";
        fnerror.style.color = "red";
        isValid = false;
    } else {
        fnerror.textContent = "";
    }

    // Validate Last Name
    if (lname.value.trim() === "") {
        lnerror.textContent = "Please enter the last name";
        lnerror.style.color = "red";
        isValid = false;
    } else {
        lnerror.textContent = "";
    }

    // Validate Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.match(emailPattern)) {
        emerror.textContent = "Please enter a valid email address";
        emerror.style.color = "red";
        isValid = false;
    } else {
        emerror.textContent = "";
    }

    // Validate textarea
    if (tarea.value.trim() === "") {
        merror.textContent = "Please enter your message here"
        merror.style.color = "red"
    }
});



// // Getting values
// let form = document.querySelector("form")
// let fname = document.querySelector(".firstname")
// let lname = document.querySelector(".lastname")
// let email = document.querySelector(".email")
// let tarea = document.querySelector(".txt-area")

// // Getting Error
// let fnerror = document.getElementById("fnameerror")
// let lnerror = document.getElementById("lnameerror")
// let emerror = document.getElementById("emailerror")

// form.addEventListener('submit', (e) => {
//     // submit.preventDefault();


//     let isValid = true;

//     if (fname.value.trim() === "") {
//         fnerror.textContent = "Please Enter the first name"
//         fnerror.style.color = "red";
//         console.log(fname);
//         isValid = false;
//     } else {
//         fnerror.textContent = "";
//     }

// });