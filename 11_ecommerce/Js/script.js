const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchbox = document.querySelector('#search');

// Search Product in Textbox
searchbox.addEventListener('keyup', (e) => {
    let searchText = e.target.value.toLowerCase().trim();
    console.log(searchText);

    boxes.forEach(box => {
        const data = box.dataset.item;
        console.log(data);
        if (data.includes(searchText)) {
            box.style.display = 'block';
        }
        else {
            box.style.display = 'none';
        }
    });
});

// buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         buttons.forEach(btn =>
//             btn.classList.remove('btn-clicked')
//         );
//         this.classList.add('btn-clicked');
//         boxes.forEach(box => {
//             let filterValue = this.getAttribute('data-filter');
//             const itemType = box.getAttribute('data-item');
//             if (filterValue == "all") {
//                 box.style.display = "block";
//             } else {
//                 if (filterValue == itemType) {
//                     box.style.display = "block";
//                 } else {
//                     box.style.display = "none";
//                 }
//             }
//         });
//     });
// });


buttons.forEach(button => {
    button.addEventListener('click', function () {
        let a = document.querySelector('.btn-clicked');
        a?.classList.remove('btn-clicked');
        this.classList.add('btn-clicked');

        const filterValue = this.dataset.filter;

        boxes.forEach(box => {
            box.style.display = (filterValue === "all" || box.dataset.item === filterValue) ? "block" : "none";
        });
    });
});
