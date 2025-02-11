let mygtukas1 = document.getElementById('pirmas');

document.getElementById('pirmas').addEventListener('click', () => {
    
    mygtukas1.classList.add('aktyvus');
    mygtukas2.classList.remove('aktyvus');
    mygtukas3.classList.remove('aktyvus');
    
    mainHTML = `
            <div>
                <img src="img/img12.svg">
                <img src="img/lent1.svg">
            </div>`;

    document.querySelector('.content').innerHTML = mainHTML;
});

let mygtukas2 = document.getElementById('antras');

document.getElementById('antras').addEventListener('click', () => {
    
    mygtukas1.classList.remove('aktyvus');
    mygtukas2.classList.add('aktyvus');
    mygtukas3.classList.remove('aktyvus');
    
    mainHTML = `
            <div>
                <img src="img/img22.svg">
                <img src="img/lent2.svg">
            </div>`;

    document.querySelector('.content').innerHTML = mainHTML;
});

let mygtukas3 = document.getElementById('trecias');

document.getElementById('trecias').addEventListener('click', () => {
    
    mygtukas1.classList.remove('aktyvus');
    mygtukas2.classList.remove('aktyvus');
    mygtukas3.classList.add('aktyvus');
    
    mainHTML = `
            <div>
                <img src="img/img3.svg">
            </div>`;

    document.querySelector('.content').innerHTML = mainHTML;
});

window.addEventListener('load', () => {
    mygtukas1.classList.add('aktyvus'); 
    document.querySelector('.content').innerHTML = `
        <div>
            <img src="img/img12.svg">
            <img src="img/lent1.svg">
        </div>`;
});