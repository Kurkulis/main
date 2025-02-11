let mygtukas = document.querySelector('button.zoom');
let pagrindinisBlokas = document.querySelector('body');

mygtukas.addEventListener('click', () => {
    if (pagrindinisBlokas.classList.contains('pritaikymas')) {
        pagrindinisBlokas.classList.remove('pritaikymas');
        mygtukas.textContent = 'zoom';
    } else {
        pagrindinisBlokas.classList.add('pritaikymas');
        mygtukas.textContent = 'UNzoom';
    }
});
