const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2")
console.log(view2);

view1.style.display = "none";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = document.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

evenDivs[4].style.backgroundColor = "purple";

for (i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.width = "150px";
    evenDivs[i].style.backgroundColor = "green";
}

const navText = document.querySelector("nav h1");
navText.textContent = "Hello World!";
console.log(navText);

const navBar = document.querySelector("nav")
navBar.innerHTML = '<h1>Rekcub</h1>'

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

const createDiv = () => {
    const newDiv = document.createElement("div");
    newDiv.textContent = "Hi";
    newDiv.style.width = "100px"
    newDiv.style.height = "100px"
    newDiv.style.backgroundColor = "red";
    newDiv.style.justifyContent = "center"
    newDiv.style.alignItems = "center"
    newDiv.style.display = "flex"
    newDiv.style.color = "black"
    newDiv.style.margin = "10px"
    view2.append(newDiv);
}
for (let i = 0; i < 12; i++) {
    createDiv()
}


// Event-Listener

const view = document.querySelector('#view2');
const div = view.querySelector("div");
const h2 = view.querySelector("h2");
console.log(view);
