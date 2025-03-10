function pirmojiFunkcija(callback) {
    callback(); 
}

function antrojiFunkcija() {
    console.log("Antra funkcija buvo iškviesta!");
}

function pirmojiFunkcija2(callback) {
    callback("Labas", 42); // Kvietimas antrai funkcijai su argumentais
}

function antrojiFunkcija2(text, number) {
    console.log(`Gauti duomenys: ${text}, ${number}`);
}


module.exports = {
    antrojiFunkcija,
    pirmojiFunkcija,
    pirmojiFunkcija2,
    antrojiFunkcija2
};