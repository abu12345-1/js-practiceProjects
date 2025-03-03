//Menu Data (Array of Objects) Starts
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "Breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Diner Double",
        category: "Lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "Shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Country Delight",
        category: "Breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "Lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "Shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "Breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "American Classic",
        category: "Lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Quarantine Buddy",
        category: "Shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Bison Steak",
        category: "Dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
//Menu Data (Array of Objects) Ends

// buttons
let buttons = document.querySelectorAll(".btns");
let menuList = document.querySelectorAll(".menu-item");


buttons.forEach(button => {
    button.addEventListener('click', function () {
        let a = document.querySelector('.btn-clicked');
        a.classList.remove('btn-clicked');
        this.classList.add('btn-clicked');

        const category = this.dataset.category;
        console.log(category);

        let filteredMenu;
        if (category === "All") {
            filteredMenu = menu;
        } else {
            filteredMenu = menu.filter(item => item.category === category);
        }
        displayMenuItems(filteredMenu);
    });
});

function displayMenuItems(menu) {
    const container = document.querySelector(".menu-container");
    container.innerHTML = menu.map(item =>
        `<div class="menu-item">
                    <img src="${item.img}" alt="{item.title}">
                    <div class="menu-text">
                        <h3>${item.title} <span class="menu-price">$${item.price}</span></h3>
                        <p>${item.desc}</p>
                    </div>
                </div>
`).join('');
}
displayMenuItems(menu);