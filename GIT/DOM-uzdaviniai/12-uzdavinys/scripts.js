let randomSkaicius = Math.floor(Math.random() * 100) + 1;
console.log('random skaicius ' + randomSkaicius)
let spejimuKiekis = 0;
document.querySelector('.btn').addEventListener('click', () => {
    let spejemasSkaicius = Number(document.querySelector('.spejimas').value);;
    let rezulatoDiv = '';
    spejimuKiekis++;

    if (spejemasSkaicius === randomSkaicius) {
        rezulatoDiv = `
        <div class="teisingai">
            <img src="img/happy.png">
            <h1>ATSPEJAI</h1>
            <p>prireike ${spejimuKiekis} spejimu</p>
            <button class="restart">Zaisti is naujo</button>
        </div>`;
        document.querySelector('.main-container').innerHTML = rezulatoDiv;
        let restartBtn = document.querySelector('.restart');
        if (restartBtn) {
            restartBtn.addEventListener("click", reload);
        }
    } else if (spejemasSkaicius > randomSkaicius) {
        rezulatoDiv = `<div class="spekMazesni">
                        <div><img src="img/sad.png"></div>
                            <div>
                                <h1>gaila, neatspejote</h1>
                                <p>spekite MAZESNI skaiciu</p>
                                </div>
                        </div>`;
        document.querySelector('.check').innerHTML = rezulatoDiv;
    } else {
        rezulatoDiv = `<div class="spekDidesni">
                        <div><img src="img/sad.png"></div>
                            <div>
                                <h1>gaila, neatspejote</h1>
                                <p>spekite DIDESNI skaiciu</p>
                            </div>
                        </div>`;
        document.querySelector('.check').innerHTML = rezulatoDiv;
    }
});
function reload() {
    window.location.reload();
}






