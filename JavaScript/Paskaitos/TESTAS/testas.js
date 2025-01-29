console.log('================ TESTAS ==================');
console.log('================ 1 ==================');

let eurai = Math.floor(Math.random() * 1000);
let kursas = 1.04;

function konvertavimasED(eurai,kursas) {
return (kursas * eurai).toFixed(2);
}

console.log(`eurai pries konvertacija - ${eurai}`)
console.log(`doleriai konvertavus turimus eurus - ${konvertavimasED(eurai,kursas)}`)

console.log('================ 2 ==================');

let doleriai = Math.floor(Math.random() * 1000);
kursas = 0.96;

function konvertavimasDE(doleriai,kursas) {
return (kursas * doleriai).toFixed(2);
}

console.log(`doleriai pries konvertacija - ${doleriai}`)
console.log(`eurai konvertavus turimus dolerius - ${konvertavimasDE(doleriai,kursas)}`)


console.log('================ 3 ==================');

function bmi(ugis,svoris) {
    const bmi = svoris / (ugis * ugis);
    return bmi.toFixed(2);
}

let ugis = 1.83;
let svoris = 80;

const suskaitBMI = bmi(ugis,svoris);

console.log(`svoris: ${svoris} kg`);
console.log(`ugis: ${ugis} m`);
console.log(`BMI: ${suskaitBMI}`);

console.log('================ 4 ==================');

let amzius = 12;

function skaiciuok(amzius) {
    const dienos = amzius * 365;
    const valandos = dienos * 24;
    const minutes = valandos * 60;
    const sekundes = minutes * 60;
    return { dienos, valandos, minutes, sekundes };
}

const rezultatai = skaiciuok(amzius);

console.log(`amzius: ${amzius} metai`);
console.log(`dienos: ${rezultatai.dienos}`);
console.log(`valandos: ${rezultatai.valandos}`);
console.log(`minutes: ${rezultatai.minutes}`);
console.log(`sekundes: ${rezultatai.sekundes}`);

console.log('================ 5 ==================');

// let temperaturaF = 100;

// function keiciamTemp(temperaturaF) {
//     const temperaturaC = (temperaturaF - 32) / 1.8;
//     return temperaturaC.toFixed(1);
// }

// const konvertuota = keiciamTemp(temperaturaF);

// console.log(`F - ${temperaturaF}`);
// console.log(`C - ${konvertuota}`);

let temperaturaC = 0;

function keiciamTemp(temperaturaC) {
    const temperaturaF = (temperaturaC * 1.8) + 32;
    return temperaturaF.toFixed(1);
}

const konvertuota = keiciamTemp(temperaturaC);

console.log(`C - ${temperaturaC}`);
console.log(`F - ${konvertuota}`);

console.log('================ 6 ==================');

let final = "";

for (let i = 0; i <= 10;i++) {
    if (i === 10) {
        final += i;
    } else {
        final += i + '-';
    }
}

console.log(final);

console.log('================ 7 ==================');

const eileKiek = 5; 

for (let i = 1; i <= eileKiek; i++) {
    let eile = ""; 
    for (let j = 1; j <= i; j++) {
        eile += "* "; 
    }
    console.log(eile); 
}

console.log('================ 8 ==================');

let now = new Date();

let dabartiniaiMetai = new Date().getFullYear();
let kaledos = new Date(dabartiniaiMetai,11,25);

let dabartineData = new Date(now); 

let likoDienu = 0;

while (dabartineData  < kaledos) {
    dabartineData.setDate(dabartineData.getDate() + 1);
    likoDienu++;
}

console.log(now); 
console.log(kaledos); 
console.log(`iki kaledu liko ${likoDienu} dienu`);

//labai grubiai ir slyksciai naudojau interneto pagalba

console.log('================ 9 ==================');

masyvas = ['Tomas','Dainius','Paulius','Jonas'];

let kabliukai = "";
let pliusai = "";

for (let i = 0; i < masyvas.length;i++) {
    if (i <masyvas.length - 1) {
    kabliukai += masyvas[i] + ',';
    pliusai += masyvas[i] + "+";
    } else {
        kabliukai += masyvas[i];
        pliusai += masyvas[i];
    }
}
console.log(kabliukai);
console.log(pliusai);

console.log('================ 10 ==================');

//nebespejau :(

