let skaicius = 1;

let tekstas = document.querySelector('p span');
let mygtukas = document.querySelector('button');
let effectas = document.querySelector('.info');

mygtukas.addEventListener('click', () => {
    skaicius++;
    tekstas.innerHTML = skaicius;

    if (skaicius >= 10) {
        document.querySelector('.info').innerText = 'jau pasiekem 10';
        effectas.style.backgroundColor = 'orange';
    }

    if (skaicius >= 20) {
        document.querySelector('.info').innerText = 'jau 20';
        effectas.style.backgroundColor = 'red';
    }

    if (skaicius >= 30) {
        document.querySelector('.info').innerText = 'jau pasiekem 30';
        effectas.style.backgroundColor = 'blue';
    }

    if (skaicius >= 35) {
        document.querySelector('.info').innerText = 'max lygis';
        effectas.style.backgroundColor = 'purple';
    }


})


// document.querySelector('.info').classList.add('oranzinis');




// document.querySelector('button').addEventListener('click', () => {
//     skaicius++;
//     document.querySelector('.skaicius span').innerText = skaicius;
// })