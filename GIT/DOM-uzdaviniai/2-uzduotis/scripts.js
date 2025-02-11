let inputSkaicius = document.getElementById('skaicius');
let atsakymoBlokas = document.getElementById('atsakymas');


document.querySelector('button').addEventListener('click', () => {
    let skaicius = inputSkaicius.valueAsNumber;

    if (skaicius % 2 === 0) {
        atsakymoBlokas.innerHTML = `<p class="taip"> skaicius ${skaicius} yra lyginis </p>`;
        
    } else {
        atsakymoBlokas.innerHTML = `<p class="ne"> skaicius ${skaicius} yra NElyginis </p>`;
        
    }


})