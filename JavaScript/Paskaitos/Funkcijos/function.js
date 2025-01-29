console.log('================ Funkcijos ==================');
console.log('=============== 1.1 uzduotis=============');

function isvedimas(){
    console.log('ignas')
    console.log('norejau')
}
isvedimas();
isvedimas();
isvedimas();

console.log('=============== 1.2 uzduotis=============');

function eilerastis() {
   console.log(` Saulė leidžiasi ramiai,
Naktis atneša sapnus giliai.
Vėjas glosto tylų mišką,
Žvaigždės šviečia aukštai visą naktį.
Rytas vėl ateis — nauja pradžia.`)
}
eilerastis();
eilerastis();
eilerastis();
eilerastis();
eilerastis();
console.log('=============== 1.3 uzduotis=============');

function vienas() {
    console.log(`vienas`)
}
function du() {
    console.log(`du`)
}
function trys() {
    console.log(`trys`)
}

vienas();
du();
trys();

console.log('=============== 1.4 uzduotis=============');

function pirma() {
    console.log(`vienas`)
}
function antra() {
    console.log(`du`)
}
function trecia() {
    pirma();
    antra();
}

trecia();

console.log('=============== 1.5 uzduotis=============');

function uno() {
    return Math.random()*10;
}
function dos() {
    return Math.random()*10;
}
function suma() {
    console.log((uno() + dos()).toFixed(2));
}

suma();
suma();
suma();

console.log('=============== 1.6 uzduotis=============');

function policininkoInformacija() {
    const vardas = "Jonas";
    const pavarde = "Kazlauskas";
    const amzius = 35;
    const alga = 1500; 
    const etatas = "Pilnas";
    const specializacija = "Kelių eismo taisyklių priežiūra";

console.log("Policininko informacija:");
    console.log(`Vardas ${vardas}`);
    console.log(`Pavarde ${pavarde}`);
    console.log(`Amzius ${amzius} metai`);
    console.log(`Alga ${alga} EUR`);
    console.log(`Etatas ${etatas}`);
    console.log(`Specializacija ${specializacija}`);

}

policininkoInformacija()

console.log('=============== 1.7 uzduotis=============');

function septinta() {
    for (let i = 0; i <=10; i++){
        console.log(Math.floor(Math.random()*10));
        }
}

for (let i = 0; i <=5; i++){
    septinta();
    console.log(' ')
    }

console.log('=============== 1.8 uzduotis=============');

function skaiciai() {
    console.log(Math.floor(Math.random()*10))
}

for (let i = 0; i <=10; i++){
skaiciai();
}

console.log('=====================================================================================================');
console.log('=============== 2.1 uzduotis=============');

let vardas = 'jonas'; 

function labas() {
    console.log(`labas ${vardas}`)
}
function ate() {
    console.log(`viso gero ${vardas}`)
}
labas();
ate();

console.log('=============== 2.2 uzduotis=============');

function didesnioIesk(sk1 ,sk2) {
    if (sk1 > sk2) {
        console.log(`sk1 > sk2`)
    } else if (sk2 > sk1) {
        console.log(`sk1 < sk2`)
    } else {
        console.log(`sk lygus`)
    }
}
didesnioIesk(5,5);
didesnioIesk(1,5);
didesnioIesk(5,1);

console.log('=============== 2.3 uzduotis=============');

function masina(marke,model,metai,turis) {
console.log(`marke - ${marke}`);
console.log(`model - ${model}`);
console.log(`metai - ${metai}`);
console.log(`turis - ${turis}`);
console.log(` `);
}

masina("Toyota", "Corolla", 2015, 1.8);
masina("BMW", "X5", 2020, 3.0);


console.log('=============== 2.4 uzduotis=============');

function suma(sk1,sk2) {
    console.log(`${sk1} + ${sk2} = ${sk1 + sk2}`);
}
function skirtum(sk1,sk2) {
    console.log(`${sk1} - ${sk2} = ${sk1 - sk2}`);
}
function daug(sk1,sk2) {
    console.log(`${sk1} * ${sk2} = ${sk1 * sk2}`);
}
function dalyb(sk1,sk2) {
    console.log(`${sk1} / ${sk2} = ${sk1 / sk2}`);
}

function allWork() {
    let sk1 = Math.floor(Math.random() * 100);
    let sk2 = Math.floor(Math.random() * 100);
    console.log(`Skaičiai: ${sk1}, ${sk2}`);
    suma(sk1, sk2);
    skirtum(sk1, sk2);
    daug(sk1, sk2);
    dalyb(sk1, sk2);
    console.log("--------------------");
}

allWork();
allWork();

console.log('=====================================================================================================');
console.log('=============== 3.1 uzduotis=============');

function zodynas(zodziai) {
    zodziai.forEach(zodis => {
        console.log(`Žodis: "${zodis}", ilgis: ${zodis.length} simbolių`);
    });
}

const zodziuMasyvas = ["Saulė", "Lietuva", "Programavimas", "Žvaigždės", "Mėnulis"];

zodynas(zodziuMasyvas);

console.log('=============== 3.2 uzduotis=============');

function skaiciokai(skaiciai) {
    skaiciai.forEach(skaicius => {
        console.log(`Skaicius: "${skaicius}", kvadratas padalintas is 2: ${skaicius ** 2 / 2}`);
    });
}
const skaiciuMasyvas1 = [2, 4, 6, 8, 10];
const skaiciuMasyvas2 = [3, 5, 7, 9, 11];

skaiciokai(skaiciuMasyvas1);
skaiciokai(skaiciuMasyvas2);

console.log('=============== 3.3 uzduotis=============');

function studenciokas(vardas,pavarde,pazymiai) {

suma = 0;
for (let i = 0;i < pazymiai.length;i++) {
    suma += pazymiai[i];
}
vidurkis = suma /pazymiai.length

    console.log(`Studentas: ${vardas} ${pavarde}`);
    console.log(`Pažymiai: ${pazymiai.join(" ")}`);
    console.log(`Vidurkis: ${vidurkis.toFixed(2)}`);
    console.log("--------------------");
}


const vardas1 = "Jonas";
const pavarde1 = "Jonaitis";
const pazymiai1 = [8, 9, 10, 7, 6];

const vardas2 = "Austėja";
const pavarde2 = "Petraitytė";
const pazymiai2 = [9, 8, 10, 10, 9];

studenciokas(vardas1, pavarde1, pazymiai1);
studenciokas(vardas2, pavarde2, pazymiai2);

console.log('=============== 3.4 uzduotis=============');

function bigNumber(masyvas) {
    bigNumba = masyvas[0];
    for (const skaicioks of masyvas) {
        if (skaicioks > bigNumba) {
            bigNumba =skaicioks;
        }
    }
    console.log(`masyvo skaiciokai - ${masyvas.join(", ")}`)
    console.log(`bigest numba - ${bigNumba}`)
}
function generation(masyvas, kiekis) {
    for (let i = 0; i < kiekis; i++) {
        const atsitiktinis = Math.floor(Math.random() * 100);
        masyvas.push(atsitiktinis);
    }
    console.log(`Sugeneruotas masyvas: [${masyvas.join(", ")}]`);
}

const masyvas1 = [];
const masyvas2 = [];
const masyvas3 = [];

generation(masyvas1, 5); 
generation(masyvas2, 8); 
generation(masyvas3, 10); 

bigNumber(masyvas1);
bigNumber(masyvas2);
bigNumber(masyvas3);

console.log('=====================================================================================================');
console.log('=============== 4.1 uzduotis=============');

function belekas() {
    return 'belekas'
}
console.log(belekas())

console.log('=============== 4.2 uzduotis=============');

function belekas() {
    return Math.floor(Math.random()*100)
}
console.log(belekas());
console.log(belekas());
console.log(belekas());

console.log('=============== 4.3 uzduotis=============');

function studentas(vardas,vidurkis) {
    return `Studentas ${vardas}, turi vidurkį - ${vidurkis}`;
}

console.log(studentas("Tomas", 8.7));
console.log(studentas("Austėja", 9.3));
console.log(studentas("Jonas", 7.5));

console.log('=============== 4.4 uzduotis=============');

function mazasDalik(skaicius) {
    for (let i = 2;i<=skaicius;i++) {
        if (skaicius % i === 0) {
            return i;
        }
    }
    return skaicius;
}


for (let skaicius = 10; skaicius <= 30; skaicius++) {
    const maziausiasDaliklis = mazasDalik(skaicius);
    console.log(`Skaičius: ${skaicius}, mažiausias daliklis: ${maziausiasDaliklis}`);
}

console.log('=============== 4.5 uzduotis=============');

function arPirminis(skaicius) {
    if (skaicius < 2) return false;
    for (let i = 2; i < skaicius;i++) {
        if (skaicius % i === 0) {
            return false;
        }
    }
    return true
}

for (let skaicius = 2; skaicius <= 15; skaicius++) {
    let atsakymas = arPirminis(skaicius);
    console.log(`${skaicius} - ${atsakymas}`);
}

console.log('=============== 4.6 uzduotis=============');

function suma2(a,b) {
    return a+b;
}
function suma3(a,b,c) {
    return a+b+c;
}
function skirtumas2(a,b) {
    return a-b;
}

function skaiciavimai(n) {
    let skaiciai = [];

    for (let i = 0; i<n;i++) {
        skaiciai.push(Math.floor(Math.random()*100));
    }

    console.log(`Sugeneruoti skaičiai: [${skaiciai.join(", ")}]`);

    if (skaiciai.length >= 2) {
        let sumaa2 = suma2(skaiciai[0],skaiciai[1]);
        let skirtumass = skirtumas2(skaiciai[0],skaiciai[1]);
        console.log(`${skaiciai[0]} + ${skaiciai[1]} = ${sumaa2}`);
        console.log(`${skaiciai[0]} - ${skaiciai[1]} = ${skirtumass}`);
    }
    if (skaiciai.length >= 3) {
        const sumaa3 = suma3(skaiciai[0], skaiciai[1], skaiciai[2]);
        console.log(`${skaiciai[0]} + ${skaiciai[1]} + ${skaiciai[2]} = ${sumaa3}`);
    }
}

skaiciavimai(5)

console.log('=====================================================================================================');
console.log('=============== 5.1 uzduotis=============');

function skSuma(masyvas) {
    let suma = 0;
    for (const sk of masyvas) {
        suma += sk;
    }
    return suma;
}

let themasyvas1 = [10, 20, 30, 40];
let themasyvas2 = [15, 25, 35, 45];

suma1 = skSuma(themasyvas1);
suma2 = skSuma(themasyvas2);

console.log(`1 suma: ${suma1}`);
console.log(`2 suma: ${suma2}`);

if (suma1 > suma2) {
    console.log(`1 suma didesne`);
} else if (suma1 < suma2) {
    console.log(`2 suma didesne`);
} else {
    console.log(`sumos lygios`);
}


console.log('=============== 5.2 uzduotis=============');

function bigWord(masyvas) {
    let ilgiausiasZod = "";
    for (zodis of masyvas) {
        if (zodis.length >ilgiausiasZod.length) {
            ilgiausiasZod = zodis;
        }
    }
    return ilgiausiasZod;
}

zodziuMasyvass = ["Saulė", "Programavimas", "Žvaigždės", "Lietuva", "Kompiuteris"];

let ilgiausiasZodis = bigWord(zodziuMasyvass);


console.log(`masyvas: "${zodziuMasyvass}"`);
console.log(`Ilgiausias žodis: "${ilgiausiasZodis}"`);
console.log(`Šio žodžio ilgis: ${ilgiausiasZodis.length} simbolių`);

console.log('=============== 5.3 uzduotis=============');

function arVisiTeig(masyvas) {
    for (const pazymys of masyvas) {
        if (pazymys < 5) {
            return false;
        }
    }
    return true;
}

const studentas1 = [8, 9, 10, 7, 6];
const studentas2= [9, 4, 10, 7, 8];

const rezultatas1 = arVisiTeig(studentas1);
const rezultatas2 = arVisiTeig(studentas2);

function rezas(z,x) {
    if (x) {
        console.log(`${z} visi pažymiai teigiami`);
    } else {
        console.log(`${z} turi bent vieną neigiamą pažymį`)
    }
}

rezas("studentas1", rezultatas1);
rezas("studentas2", rezultatas2);

console.log('=====================================================================================================');
console.log('=============== 6.1 uzduotis=============');

const darbuotojas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    dabartinisAtlyginimas: 1500,
    etatas: 1,

    pakeltAtlyg(procentai) {
        const padidejimas = this.dabartinisAtlyginimas * procentai / 100;
        return this.dabartinisAtlyginimas + padidejimas;
    },

    pakeistEtat(naujasEtat) {
        return this.dabartinisAtlyginimas * naujasEtat;
    }
};

const naujAtlygi = darbuotojas.pakeltAtlyg(10);
console.log(`Jei atlyginimas pakiltų 10%, būtų: ${naujAtlygi} EUR`);


const pakeiAtlygi = darbuotojas.pakeistEtat(0.5);
console.log(`Jei etatas būtų sumažintas iki 0.5, atlyginimas būtų: ${pakeiAtlygi} EUR`);
