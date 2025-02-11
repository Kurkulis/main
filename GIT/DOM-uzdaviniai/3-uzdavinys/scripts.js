let skaicius = 1;

let atsakymas = document.querySelector('h1 span');

document.querySelector('button.pirmyn').addEventListener('click', () => {

    if (skaicius === 5) {
        skaicius = 1;
    } else {
        skaicius++;
    }
    atsakymas.innerText = skaicius;

});

document.querySelector('button.atgal').addEventListener('click', () => {

    if (skaicius === 1) {
        skaicius = 5;
    } else {
        skaicius--;
    }
    atsakymas.innerText = skaicius;

});