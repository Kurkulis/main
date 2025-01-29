console.log('================ kepalu uzduotis ==================');
console.log('===============pirma uzduotis=============');

//nekintantys
let darbo_laikas = 8;
//kintantys
let darbuotojo_efektyvumas = 2;
let darbuotojai = 5;
let kepalo_savikaina = 0.5;
let kepalo_kaina = 1.5;
let uzsakymu_skaicius = 5;

let kiekis = darbuotojo_efektyvumas * darbuotojai;
let savikaina = darbuotojo_efektyvumas * darbuotojai * kepalo_savikaina;
let pajamos = darbuotojo_efektyvumas * darbuotojai * kepalo_kaina;
let pelnas = (darbuotojo_efektyvumas * darbuotojai * kepalo_kaina) - (darbuotojo_efektyvumas * darbuotojai * kepalo_savikaina);

console.log(`iskeptu kepalu kiekis = ${kiekis} vnt.`);
console.log(`iskeptu kepalu savikaina = ${savikaina} eur.`);
console.log(`pajamos = ${pajamos} eur.`);
console.log(`pelnas = ${pelnas} eur.`);

let tikrieji_parduoti;

if (uzsakymu_skaicius <= kiekis ) {
    tikrieji_parduoti = uzsakymu_skaicius;
    console.log('spės');
} else {
    tikrieji_parduoti = kiekis;
    console.log(`nespės, trūks ${uzsakymu_skaicius - kiekis} `)
} 

console.log('=============        4          ===============');

savikaina = tikrieji_parduoti * kepalo_savikaina;
pajamos = tikrieji_parduoti * kepalo_kaina;
pelnas = pajamos - savikaina;

console.log(`Iskeptu kepalu kiekis = ${kiekis} vnt.`);
console.log(`Parduotu kepalu savikaina = ${savikaina} eur.`);
console.log(`Tikros pajamos = ${pajamos} eur.`);
console.log(`Tikras pelnas = ${pelnas} eur.`);

console.log('==========================================');

