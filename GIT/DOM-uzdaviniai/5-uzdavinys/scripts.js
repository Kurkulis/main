
let tekstasMain = document.querySelector('.tekstas');
let mygtukai = document.querySelectorAll('.blokas .mygtukai button');

mygtukai.forEach((mygtukas) => {
    mygtukas.addEventListener('click', (event) => {
        let stilius = event.target.dataset.tipas;

        switch (stilius) {
            case 'paprastas':
                tekstasMain.style.fontStyle = 'normal';
                tekstasMain.style.fontWeight = 'normal';
                break;
            case 'pastorintas':
                tekstasMain.style.fontStyle = 'normal';
                tekstasMain.style.fontWeight = 'bold';
                break;
            case 'pasviras':
                tekstasMain.style.fontStyle = 'italic';
                tekstasMain.style.fontWeight = 'normal';
                break;
        }
    });
});

document.getElementById('dydisInput').addEventListener('input', (event) => {
        tekstasMain.style.fontSize = event.target.value + 'px';
    
})


