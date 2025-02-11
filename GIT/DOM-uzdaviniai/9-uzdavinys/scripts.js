let index = 0;

const images = ["img/fotke1.jpg", "img/fotke2.jpg", "img/fotke3.jpg", "img/fotke4.jpg", "img/fotke5.jpg"];
const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumb");

let atgal = document.getElementById('prev');
let pirmyn = document.getElementById('next');


function setMainImage(src, element) {
    mainImage.src = src;
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

document.getElementById('prev').addEventListener('click', () => {
    if (index === 0) {
        index = images.length - 1;
    } else {
        index--;
    }

    mainImage.src = images[index];
    updatePage();
});

document.getElementById('next').addEventListener('click', () => {
    if (index === images.length - 1) {
        index = 0;
    } else {
        index++;
    }

    mainImage.src = images[index];
    updatePage();
});


function updatePage() {
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
}

function changeImage(i) {
    index = i;
    mainImage.src = images[index];
    updatePage();
}

window.addEventListener("load", updatePage);

































// function changeImage(src, element) {
//     mainImage.src = src;
//     thumbnails.forEach(thumb => thumb.classList.remove("active"));
//     element.classList.add("active");
// }

// document.querySelector(".prev").addEventListener("click", () => {
//     currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
//     mainImage.src = images[currentIndex];
//     updateActiveThumbnail();
// });

// document.querySelector(".next").addEventListener("click", () => {
//     currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
//     mainImage.src = images[currentIndex];
//     updateActiveThumbnail();
// });

// function updateActiveThumbnail() {
//     thumbnails.forEach(thumb => thumb.classList.remove("active"));
//     thumbnails[currentIndex].classList.add("active");
// }