console.log('================ string ir datos ==================');
console.log('=============== 1.1 uzduotis=============');

let zodis = 'labas';

let apverstas = '';

for (let i = zodis.length-1; i >= 0;i--) {
    apverstas += zodis[i];
}
console.log(zodis);
console.log(apverstas);

console.log('=============== 1.2 uzduotis=============');
console.log('=============== FOR=============');

sakinys = 'sveiki mano vardas yra jonas';

let arYraZodis = false;

const zodziai = sakinys.split(" ");

function tikrinimas(masyvas, zodis) {
    for (let i = 0; i < masyvas.length; i++) {
        if (masyvas[i] === zodis) { 
            return true; 
        }
    }
    return false;
}

console.log(tikrinimas(zodziai, "mano"));

console.log('=============== true/false=============');

console.log(sakinys.includes('mano'));


console.log('=============== date =============');

const now = new Date();
const n = 5;

console.log(`Dabar: ${now.toISOString().split('T')[0]}`);

const priesN = new Date();
priesN.setDate(now.getDate() - n);

console.log(`Data prieš ${n} dienas: ${priesN.toISOString().split('T')[0]}`);


console.log('=============== 1.2 =============');

if (now > priesN) {
    console.log('dabar daugiau')
} else {
    console.log('anksciau daugiau')
}

console.log('=============== 1.3 =============');

console.log(` ${now.toISOString().split('T')[0]}`);
console.log(` ${priesN.toISOString().split('T')[0]}`);

const metuSkirt = now.getFullYear() - priesN.getFullYear();

const menuoSkirt = now.getMonth() - priesN.getMonth();

const dienaSkirt = now.getDate() - priesN.getDate();

console.log(` ${metuSkirt}`);
console.log(` ${menuoSkirt}`);
console.log(` ${dienaSkirt}`);